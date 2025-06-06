from django.shortcuts import render
from .models import Persona
from .forms import PersonaForm  
# Create your views here.
def personaTestView(request):
    obj = Persona.objects.get(id=1)  
    context = {
        'nombre': obj.nombres,
        'edad': obj.edad,
    }
    return render(request, 'personas/descripcion.html', context)

def personaCreateView(request):
    form = PersonaForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = PersonaForm() 
    context = {
        'form': form,
    }
    return render(request, 'personas/personasCreate.html', context)