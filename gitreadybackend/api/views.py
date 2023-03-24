from django.shortcuts import render
import os
import openai
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import traceback

openai.api_key = os.getenv('OPENAI_API_KEY')

def speech_to_text(audio):
    with open('speech.wav','wb') as f:
        f.write(audio.read())
    speech = open('speech.wav', 'rb')
    completion = openai.Audio.transcribe(
        model = "whisper-1",
        file=speech
    )
    user_input = completion['text']
    return user_input

@api_view(['POST']) 
def get_chatgpt_response(request): # requests the chatgpt response from the openai api
    audio_file = request.FILES.get('audio_file')
    if not audio_file:
        return Response({"error": "No audio file provided."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_input = speech_to_text(audio_file)
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_input}],
            temperature=0.8,
        )
        chatgpt_response = response.choices[0].message.content

        return Response({"chatgpt_response": chatgpt_response})
    except Exception as e:
        return Response({"error": f"Error interacting with OpenAI API: {str(e)}\n{traceback.format_exc()}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

