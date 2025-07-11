"""
URL configuration for listaContactos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from inicio.views import myHomeView
from inicio.views import anotherView
from personas.views import personaTestView, personaCreateView, searchForHelp, personaAnotherCreateView
from personas.views import personasShowObject

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', myHomeView, name='home'),
    path('another/', anotherView, name='otro'),
    path('persona/', personaTestView, name='testViewPersona'),
    path('agregar/', personaCreateView, name='createPersona'),
    path('search', searchForHelp, name='buscar'),
    path('anotherAdd', personaAnotherCreateView, name='OtroAgregarPersonas'),
    path('personas/<int:myID>/', personasShowObject, name = 'browsing'),
    path('personas/', include(('personas.urls', 'personas'), namespace='personas')),  
]
