def greater_then(intA, intB):
    if intA < intB:
        return intB
    elif intA > intB:
        return intA
    else:
        return 0


if __name__ == "__main__":
    print(greater_then(intA=10, intB=10))
