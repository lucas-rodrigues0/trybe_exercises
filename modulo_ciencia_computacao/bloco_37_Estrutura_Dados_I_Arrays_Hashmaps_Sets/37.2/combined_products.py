def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer


if __name__ == "__main__":
    numbers = [1, 3, 1, 1, 2, 3, 1, 2, 3, 3, 4]
    print(good_pairs(numbers))
