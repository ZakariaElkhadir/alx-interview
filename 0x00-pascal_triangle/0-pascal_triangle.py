#!/usr/bin/python3
from math import factorial

"""Pascal's Triangle"""


def pascal_triangle(n):
    if n <= 0:
        return []
    if isinstance(n, int):
        for i in range(n):
            for space in range(1, n - i):
                print(end=" ")
            for r in range(i + 1):
                ncr = factorial(i) // (factorial(r) * factorial(i - r))
                print(ncr, end=" ")
            print("")
