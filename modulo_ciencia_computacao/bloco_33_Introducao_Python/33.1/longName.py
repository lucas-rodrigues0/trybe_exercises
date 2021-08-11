def longest_name(names):
    result = ""
    for name in names:
        if len(name) > len(result):
            result = name
    return result


if __name__ == "__main__":
    test = ["bob", "sil", "Hubert", "tux"]
    print(longest_name(test))
