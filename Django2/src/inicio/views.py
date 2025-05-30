from django.shortcuts import render
django.http import HttpResponse
# Create your views here.
myHomeView(*args, **kwargs):
    return HttpResponse("<h1>Hola Mundo desde DJango</h1>")