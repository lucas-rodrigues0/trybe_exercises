try:
    alunos = open("alunos.txt", mode="r")
    aprovados = open("aprovados.txt", mode="w")

    for line in alunos:
        rate = int(line.split(" ")[1])
        if rate >= 6:
            name = line.split(" ")[0]
            aprovados.write(f"{name}\n")

except OSError:
    print("arquivo inexistente")
else:
    print("arquivo manipulado e fechado com sucesso")
    alunos.close()
    aprovados.close()
finally:
    print("Tentativa de abrir arquivo")
