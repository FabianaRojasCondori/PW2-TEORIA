from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import Persona
from .forms import PersonaForm, RawPersonaForm
from django.views.generic import ListView
from django.views.generic import DetailView
from django.views.generic.edit import CreateView, DeleteView
from django.urls import reverse_lazy

# Create your views here.

class PersonaListView(ListView):
    model = Persona
    queryset = Persona.objects.filter(edad__lte='20')

class PersonaDetailView(DetailView):
    model = Persona

def personaAnotherCreateView(request):
    form = RawPersonaForm() #request.GET
    if request.method == "POST":
        form = RawPersonaForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            Persona.objects.create(**form.cleaned_data)
        else:
            print(form.errors)
    context = {
        'form': form,
    }
    return render(request, 'personas/personasCreate.html', context)

def personaTestView(request):
    obj = Persona.objects.get(id = 1)
    context = {
        'objeto': obj,
        }
    return render(request, "personas/descripcion.html", context)

def personaCreateView(request):
    initialValues = {
        'nombres': 'Sin Nombre',
        }
    
    form = PersonaForm(request.POST or None, initial=initialValues)
    if form.is_valid():
        form.save()
        form = PersonaForm()  
    context = {
        'form': form,
        }
    return render(request, 'personas/personasCreate.html', context)

def searchForHelp(request):
    return render(request, "personas/search.html", {})

def personasShowObject(request, myID):
    obj = get_object_or_404(Persona, id=myID)
    context = {
        'objeto': obj,
    }
    return render(request, "personas/descripcion.html", context)

class PersonaCreateView(CreateView):
    model = Persona
    fields = [
        'nombres',
        'apellidos',
        'edad',
        'donador'
    ]

class PersonaDeleteView(DeleteView):
    model = Persona 
    success_url = reverse_lazy('personas:persona-list')