import pytest
from fizzbuzz import fizzbuzz


def test_if_fizzbuzz_set_list_up_to_15():
    assert fizzbuzz(15) == [
        1,
        2,
        "fizz",
        4,
        "buzz",
        "fizz",
        7,
        8,
        "fizz",
        "buzz",
        11,
        "fizz",
        13,
        14,
        "fizzbuzz",
    ]


def test_if_when_zero_is_pass_to_the_function_returns_an_empty_list():
    assert fizzbuzz(0) == []


def test_if_throw_exception_when_null_is_pass_to_the_function():
    with pytest.raises(
        TypeError,
        match="fizzbuzz\\(\\) missing 1 required positional argument: 'n'",
    ):
        fizzbuzz()


def test_if_throw_exception_when_a_string_is_pass_to_the_function():
    with pytest.raises(
        TypeError,
        match="'str' object cannot be interpreted as an integer",
    ):
        fizzbuzz("15")
