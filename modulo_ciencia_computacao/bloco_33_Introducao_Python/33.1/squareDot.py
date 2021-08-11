# def square_dot(n):
#     counter = 1
#     while counter <= n:
#         aux = 1
#         while aux <= n:
#             if aux != n:
#                 print("*", end="")
#             else:
#                 print("*")
#             aux += 1
#         counter += 1


def square_dot(n):
    for row in range(n):
        print(n * "*")


if __name__ == "__main__":
    test = 7
    square_dot(test)
