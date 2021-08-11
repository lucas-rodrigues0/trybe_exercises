# def smaler_value(values):
#     result = values[0]
#     for value in values:
#         if value < result:
#             result = value

#     return result


def smaler_value(values):
    return min(values)


if __name__ == "__main__":
    test = [5, 9, 19, 70, 8, 100, 35, 27]
    print(smaler_value(test))
