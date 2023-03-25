from django.shortcuts import render
import os
import openai
from elevenlabslib import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import traceback
from .models import Conversation, Message
import requests
from django.http import FileResponse
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

# When an audio file is sent to the server, this function is called and returns the chatgpt response.
@api_view(['POST']) 
def get_chatgpt_response(request): 
    audio_file = request.FILES.get('audio_file')
    if not audio_file:
        return Response({"error": "No audio file provided."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        print("Transcribing speech to text...")
        user_input = speech_to_text(audio_file)
        print("Speech transcribed:", user_input)

        print("Getting ChatGPT response...")
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_input}],
            temperature=0.8,
        )
        chatgpt_response = response.choices[0].message.content
        print("ChatGPT response:", chatgpt_response)

       # Synthesize ChatGPT response as audio using Eleven Labs API
        print("Synthesizing text to speech...")
        eleven_labs_url = "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL"
        api_key = os.environ.get("ELEVEN_LAB_KEY")
        headers = {"xi-api-key": api_key}
        data = {"text": chatgpt_response, "voice_settings": {
                                            "stability": 0,
                                            "similarity_boost": 0
        }}

        warnings.simplefilter("ignore", InsecureRequestWarning)
        tts_response = requests.post(eleven_labs_url, headers=headers, json=data, verify=False)
        print("Eleven Labs response:", tts_response.text)

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