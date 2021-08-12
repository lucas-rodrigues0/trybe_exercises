def triangle_type(sideA, sideB, sideC):
    triangle = (
        sideA + sideB > sideC
        and sideB + sideC > sideA
        and sideA + sideC > sideB
    )
    if not triangle:
        return "Não é triangulo;"
    elif sideA == sideB == sideC:
        return "Triângulo Equilátero"
    elif sideA == sideB or sideB == sideC or sideA == sideC:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


if __name__ == "__main__":
    testA = 28
    testB = 28
    testC = 28
    print(triangle_type(testA, testB, testC))
