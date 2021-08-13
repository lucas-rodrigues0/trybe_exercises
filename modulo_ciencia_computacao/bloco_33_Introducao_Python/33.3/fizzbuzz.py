def fizzbuzz(n):
    result = []
    for i in range(n):
        i += 1
        if i % 3 == 0 and i % 5 == 0:
            result.append("fizzbuzz")
        elif i % 5 == 0:
            result.append("buzz")
        elif i % 3 == 0:
            result.append("fizz")
        else:
            result.append(i)

    return result


if __name__ == "__main__":
    n = input("Enter a number: ")

    print(fizzbuzz(int(n)))
