from django.urls import path
from .views import (
    PersonaListView, PersonaDetailView, PersonaCreateView, PersonaDeleteView
    )

urlpatterns = [
    path('', PersonaListView.as_view(), name='persona-list'),
    path('<int:pk>/', PersonaDetailView.as_view(), name='persona-detail'),
    path('create/', PersonaCreateView.as_view(), name='persona-create'),
    path('<int:pk>/eliminar/', PersonaDeleteView.as_view(), name='persona-delete'),
]