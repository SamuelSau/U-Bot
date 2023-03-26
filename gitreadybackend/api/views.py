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

openai.api_key = os.getenv('OPENAI_API_KEY')
ELEVEN_LAB_KEY = os.environ.get("ELEVEN_LAB_KEY")

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

def get_initial_prompt():
    with open('personality.txt', 'r') as file:
        return file.read()

# When an audio file is sent to the server, this function is called and returns the chatgpt response.
@api_view(['POST']) 
def get_chatgpt_response(request): 
    audio_file = request.FILES.get('audio_file')
    # Store user_input as a message in session data
    
    if not audio_file:
        return Response({"error": "No audio file provided."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_input = speech_to_text(audio_file)

        if not request.session.get('messages'):
            initial_prompt = "You are interviewing a candidate by conducting a behavioral software engineer interview for a software engineer role. Ask them easy questions"
            messages = [{'content': initial_prompt, 'role': Message.SYSTEM}]
            request.session['messages'] = messages
        else:
            messages = request.session['messages']
        # Format the conversation history for ChatGPTsystem
        user_message = {'content': user_input, 'role': Message.USER}
        messages.append(user_message)
    
        print("Getting ChatGPT response...")
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages= messages,
            temperature=0.8,
        )
        chatgpt_response = response.choices[0].message.content
        assistant_message = {'content': chatgpt_response, 'role': Message.ASSISTANT}
        messages.append(assistant_message)  

        request.session['messages'] = messages

        request.session.modified = True

       # Synthesize ChatGPT response as audio using Eleven Labs API
        eleven_labs_url = "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL"
        api_key = os.environ.get("ELEVEN_LAB_KEY")
        headers = {"xi-api-key": api_key}
        data = {"text": chatgpt_response, "voice_settings": {
                                            "stability": 0.75,
                                            "similarity_boost": 0.75
        }}

        warnings.simplefilter("ignore", InsecureRequestWarning)
        tts_response = requests.post(eleven_labs_url, headers=headers, json=data, verify=False)
        #print("Eleven Labs response:", tts_response.text)

        if tts_response.status_code != 200:
            raise Exception(f"Error interacting with Eleven Labs API: {tts_response.text}")

        # Convert audio data to base64
        audio_base64 = base64.b64encode(tts_response.content).decode("utf-8")

        #Create a custom response with JSON data and the base64-encoded audio

        custom_response = {
            "user_input": user_input,
            "chatgpt_response": chatgpt_response,
            "audio_base64": audio_base64,
        }

        return Response(custom_response, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({"error": f"Error: {str(e)}\n{traceback.format_exc()}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['POST'])
def end_session(request):
    # Clear the conversation data from the session
    request.session.flush()
    return JsonResponse({"success": True})