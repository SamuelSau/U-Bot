from django.shortcuts import render
import os
import openai
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import traceback

openai.api_key = os.getenv('OPENAI_API_KEY')

@api_view(['POST'])
def get_chatgpt_response(request):
    user_input = request.data.get('user_input', '')
    if not user_input:
        return Response({"error": "No user input provided."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": user_input}],
            temperature=0.8,
        )
        chatgpt_response = response.choices[0].message.content

        return Response({"chatgpt_response": chatgpt_response})
    except Exception as e:
        return Response({"error": f"Error interacting with OpenAI API: {str(e)}\n{traceback.format_exc()}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

