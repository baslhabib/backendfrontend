from django.urls import path
from .views import run_algorithm, home

urlpatterns = [
    path('', home, name='home'),          # Home page
    path('run/', run_algorithm, name='run_algorithm'),
]
