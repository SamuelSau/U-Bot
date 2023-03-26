from datetime import datetime
from django.shortcuts import render
import os
import openai
from elevenlabslib import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import traceback
from .models import Message
import requests
from django.http import FileResponse, JsonResponse
import base64
import json
import warnings
from urllib3.exceptions import InsecureRequestWarning
from dotenv import load_dotenv
load_dotenv()

openai.api_key = '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'
ELEVEN_LAB_KEY = os.environ.get("ELEVEN_LAB_KEY")
DEFAULT_INITIAL_PROMPT = "Your name is Ron and you are a senior software engineer that has worked at Google for over 20 years. You are interviewing a candidate by conducting a behavioral software engineer interview for a software engineer role. You will be asking and clarifying easy questions. Try to be as witty and humourous as possible. Limit your response to 50 words. "

def speech_to_text(audio):
    with open('speech.wav', 'wb') as f:
        f.write(audio.read())
    speech = open('speech.wav', 'rb')
    
    try:
        completion = openai.Audio.transcribe(
            model="whisper-1",
            file=speech
        )
    except Exception as e:
        print(f"Error during transcription: {e}")
        raise e
    
    user_input = completion['text']
    return user_input

def create_message(content, role):
    message = Message(content=content, role=role)
    message.save()
    return message

def get_initial_prompt():
    with open('personality.txt', 'r') as file:
        return file.read()

@api_view(['POST'])
def set_initial_prompt(request):
    custom_prompt = request.data.get('custom_prompt')
    # Flush all messages
    Message.objects.all().delete()
    if custom_prompt:
        combined_prompt = f"{DEFAULT_INITIAL_PROMPT}{custom_prompt}"
        create_message(combined_prompt, Message.SYSTEM)
        
        return JsonResponse({"message": "Initial prompt updated successfully."}, status=status.HTTP_200_OK)
    else:
        create_message(DEFAULT_INITIAL_PROMPT, Message.SYSTEM)
        return JsonResponse({"error": "No custom prompt provided."}, status=status.HTTP_400_BAD_REQUEST)

# When an audio file is sent to the server, this function is called and returns the chatgpt response.
@api_view(['POST']) 
def get_chatgpt_response(request): 
    audio_file = request.FILES.get('audio_file')
    # Store user_input as a message in session data
    
    if not audio_file:
        return Response({"error": "No audio file provided."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_input = speech_to_text(audio_file)

        initial_prompt = Message.objects.filter(role=Message.SYSTEM).first()
        if not initial_prompt:
            initial_prompt = create_message(DEFAULT_INITIAL_PROMPT, Message.SYSTEM)

        messages = [message.to_json() for message in Message.objects.all()]

        user_message = {'content': user_input, 'role': 'user'}
        messages.append(user_message)
    
        print("Getting ChatGPT response...")
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages= messages,
            temperature=0.8,
        )
        chatgpt_response = response.choices[0].message.content
        
        assistant_message = {'content': chatgpt_response, 'role': 'assistant'}
        messages.append(assistant_message)

       # Synthesize ChatGPT response as audio using Eleven Labs API
        eleven_labs_url = "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL"
        api_key = os.environ.get("ELEVEN_LAB_KEY")
        headers = {"xi-api-key": api_key}
        data = {"text": chatgpt_response, "voice_settings": {
                                            "stability": 0.75,
                                            "similarity_boost": 0.75
        }}

        warnings.simplefilter("ignore", InsecureRequestWarning)
        print("Sending request to Eleven Labs...")
        tts_response = requests.post(eleven_labs_url, headers=headers, json=data, verify=False)
        #print("Eleven Labs response:", tts_response.text)

        if tts_response.status_code != 200:
            raise Exception(f"Error interacting with Eleven Labs API: {tts_response.text}")

        # Convert audio data to base64
        print("Converting audio to base64...")
        audio_base64 = base64.b64encode(tts_response.content).decode("utf-8")

        #Create a custom response with JSON data and the base64-encoded audio

        custom_response = {
            "user_input": user_input,
            "messages": messages,
            "audio_base64": audio_base64,
        }

        return Response(custom_response, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": f"Error: {str(e)}\n{traceback.format_exc()}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
def end_session(request):
    # Clear all messages from the database
    Message.objects.all().delete()
    return JsonResponse({"success": True})