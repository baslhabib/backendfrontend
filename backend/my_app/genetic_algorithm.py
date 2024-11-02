import random

def run_genetic_algorithm(population_size, generations):
    # Initialize population
    population = [random.randint(0, 100) for _ in range(population_size)]
    # Example of a simple genetic algorithm logic
    for generation in range(generations):
        # Implement selection, crossover, mutation
        # Update population here...
        pass
    return population
