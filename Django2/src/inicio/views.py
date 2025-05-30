from django.shortcuts import render
django.http import HttpResponse
# Create your views here.
def myHomeView(*args, **kwargs):
    return HttpResponse("<h1>Hola Mundo desde DJango</h1>")
def anotherView(request):
    return HttpResponse("<h1>Solo otra página.</h1>")