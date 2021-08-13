import pytest
from phone_decode import phone_decode


def test_if_decode_the_message_in_digits():
    assert phone_decode("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_if_throws_exception_if_no_message_is_given():
    with pytest.raises(
        TypeError,
        match=(
            "phone_decode\\(\\) missing 1 required positional argument: 'data'"
        ),
    ):
        phone_decode()


def test_if_returns_empty_string_if_invalid_character_is_given():
    assert phone_decode("#%&+!/") == ""
