import sys

values = input("Digite um sequencia de numeros separado por espaço:")
values_list = values.split(" ")
invalid_value = ""
final_value = 0

for value in values_list:
    if not value.isdigit():
        invalid_value = value
    else:
        final_value += int(value)

if invalid_value != "":
    print(
        f"Erro ao somar valores, {invalid_value} é um valor inválido",
        file=sys.stderr,
    )
else:
    print(f"Final value: {final_value}")
