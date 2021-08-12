def gas_total(liters, fuel):
    GAS_PRICE = 2.50
    ALCOOL_PRICE = 1.90
    total = 0
    if fuel == "G" and liters <= 20:
        discount_price = GAS_PRICE * (1 - 0.04)
        total = liters * discount_price
    elif fuel == "G" and liters > 20:
        discount_price = GAS_PRICE * (1 - 0.06)
        total = liters * discount_price
    elif fuel == "A" and liters <= 20:
        discount_price = ALCOOL_PRICE * (1 - 0.03)
        total = liters * discount_price
    elif fuel == "A" and liters > 20:
        discount_price = ALCOOL_PRICE * (1 - 0.05)
        total = liters * discount_price
    else:
        total = "Invalid fuel"

    return total


if __name__ == "__main__":
    test_liters = 37
    test_fuel = "A"
    print(gas_total(test_liters, test_fuel))
