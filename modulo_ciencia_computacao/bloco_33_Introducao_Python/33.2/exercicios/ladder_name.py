user_name = input("Digite seu nome: ").upper()

size = len(user_name)
while size > 0:
    for letter in range(size):
        print(user_name[letter], end="")

    size -= 1
    print("")
