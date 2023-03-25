# urls.py
from django.urls import path
from . import views

urlpatterns = [
    # ...
    path('get_chatgpt_response/', views.get_chatgpt_response, name='get-chatgpt-response'),
]
