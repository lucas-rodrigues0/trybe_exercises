def average(values):
    result = 0
    for value in values:
        result += value
    return result / len(values)


if __name__ == "__main__":
    test_values = [10, 7, 33, 12, -55, 173, -13]
    print(average(test_values))
