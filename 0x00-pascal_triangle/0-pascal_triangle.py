#!/usr/bin/python3
"""Pascal's Triangle"""
from math import factorial


def pascal_triangle(n):
    """doc doc"""
    if n <= 0:
        return []
    if isinstance(n, int):
        for i in range(n):
            for r in range(i + 1):
                ncr = factorial(i) // (factorial(r) * factorial(i - r))
                print(ncr, end=" ")
            print("")
