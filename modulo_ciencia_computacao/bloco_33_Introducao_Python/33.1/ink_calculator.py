import math


def ink_calculator(square_meters):
    COST_PER_GALLON = 80.00
    liters_needed = square_meters / 3
    gallons_needed = math.ceil(liters_needed / 18)
    cost = 0
    if gallons_needed < 1:
        cost = COST_PER_GALLON
    else:
        cost = COST_PER_GALLON * gallons_needed

    return gallons_needed, cost


if __name__ == "__main__":
    test = 90
    print(ink_calculator(test))
