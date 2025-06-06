from django.shortcuts import render
from django.http import HttpResponse
from personas.models import Persona

# Create your views here.
def myHomeView(request, *args, **kwargs):
    myContext = {
        'myText': 'Esto es sobre nosotros',
        'myNumber': 123,
        'myList': [33, 44, 55],
    }
    return render (request, "home.html", myContext)

def anotherView(request):
    return HttpResponse("<h1>Solo otra página.</h1>")

def personaTestView(request):
    obj = Persona.objects.get(id=1)  
    context = {
        'nombre': obj.nombres,
        'edad': obj.edad,
    }
    return render(request, 'personas/test.html', context)