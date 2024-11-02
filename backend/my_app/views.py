from django.http import JsonResponse
from .genetic_algorithm import run_genetic_algorithm
from django.http import HttpResponse


def run_algorithm(request):
    population_size = int(request.GET.get('population_size', 10))
    generations = int(request.GET.get('generations', 5))
    result = run_genetic_algorithm(population_size, generations)
    return JsonResponse({'result': result})


def home(request):
    return HttpResponse("Welcome to the Genetic Algorithm API!")
