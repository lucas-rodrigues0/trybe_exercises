import pytest
from email_verification import email_verify


def test_if_email_is_verified():
    assert (
        email_verify("email_123-test@mail1test.com") == "Validation succeed!"
    )


def test_if_raise_exception_if_first_character_isdigit_in_user_name_of_email():
    with pytest.raises(
        ValueError,
        match=("First character can not be digit"),
    ):
        email_verify("123email@mail.com")


def test_if_raise_exception_with_invalid_character_in_user_name_of_email():
    with pytest.raises(
        ValueError,
        match=("User name can only have alphabetic characters and '-' or '_'"),
    ):
        email_verify("ema#il@mail.com")


def test_if_raise_exception_with_invalid_character_in_domain_site_of_email():
    with pytest.raises(
        ValueError,
        match=("Domain site can only have alphabetic characters"),
    ):
        email_verify("email@ma-il.com")


def test_if_raise_exception_with_extension_of_email_not_with_3_character():
    with pytest.raises(
        ValueError,
        match=("Extension can only have 3 characters"),
    ):
        email_verify("email@mail.co")
