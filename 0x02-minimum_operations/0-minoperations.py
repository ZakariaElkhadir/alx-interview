#!/usr/bin/python3
""" docstring """


def minOperations(n):
    """ Calculate the minimum operations to reach n """
    if n <= 1:
        return 0

    operations = 0
    divisor = 2

    while n > 1:
        while n % divisor == 0:
            operations += divisor
            n //= divisor
        divisor += 1
    return operations
