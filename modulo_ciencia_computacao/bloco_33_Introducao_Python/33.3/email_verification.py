def user_name_verify(user_name):
    if user_name[0].isdigit():
        raise ValueError("First character can not be digit")
    for char in user_name:
        if char == "_" or char == "-":
            continue
        if not char.isalnum():
            raise ValueError(
                "User name can only have alphabetic characters and '-' or '_'"
            )
    return True


def domain_and_extension_verify(domain):
    site = domain.split(".")[0]
    extension = domain.split(".")[1]
    for char in site:
        if not char.isalnum():
            raise ValueError("Domain site can only have alphabetic characters")
    if len(extension) != 3:
        raise ValueError("Extension can only have 3 characters")
    return True


def email_verify(email):
    user_name = email.split("@")[0]
    domain = email.split("@")[1]
    valid_name = user_name_verify(user_name)
    valid_domain = domain_and_extension_verify(domain)
    if valid_name and valid_domain:
        return "Validation succeed!"


if __name__ == "__main__":
    test = "email@mail.c0m"
    print(email_verify(test))
