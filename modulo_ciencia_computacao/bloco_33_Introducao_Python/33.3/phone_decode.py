def decode_char(char):
    decode_char = ""
    with open("phone_code.txt", mode="r") as file:
        content = file.read().split("\n")
        for row in content:
            letters = row.split(" ")[0]
            if char in letters:
                decode_char = row.split(" ")[1]
    return decode_char


def phone_decode(data):
    upper_data = data.upper()
    decode_result = ""
    for char in upper_data:
        if char == "0" or char == "1" or char == "-":
            decode_result += char
        else:
            decode_result += decode_char(char)
    return decode_result


if __name__ == "__main__":
    test = input("Enter message: ")
    print(phone_decode(test))
