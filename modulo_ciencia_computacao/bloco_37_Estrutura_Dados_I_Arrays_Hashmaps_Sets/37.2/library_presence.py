def presence_check(entrance_time, exit_time, value):
    result = 0

    for entrance, exit in zip(entrance_time, exit_time):
        if entrance <= value <= exit:
            result += 1
    return result


if __name__ == "__main__":
    entradas = [1, 2, 3, 2, 3, 5]
    saidas = [3, 2, 7, 6, 4, 7]
    instante_buscado = 4

    print(presence_check(entradas, saidas, instante_buscado))
