import random

file = open("words_list.txt", mode="r")

WORD_LIST = file.read().split("\n")
del WORD_LIST[-1]

word = random.choice(WORD_LIST)

scrambled_word = "".join(random.sample(word, len(word)))

print(scrambled_word)
guess = input("Que palavra é essa?: ")

if guess == word:
    print("Parabéns! Acertou!")
else:
    print("Nana! Errou!")
