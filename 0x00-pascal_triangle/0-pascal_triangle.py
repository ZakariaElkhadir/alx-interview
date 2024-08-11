#!/usr/bin/python3
"""Pascal's Triangle"""


def pascal_triangle(n):
    """Returns a list of lists representing Pascal's Triangle of n."""
    if n <= 0:
        return []

    triangle = []
    for i in range(n):
        row = []
        for r in range(i + 1):
            # Calculate the value of nCr (binomial coefficient)
            if r == 0 or r == i:
                row.append(1)
            else:
                row.append(triangle[i-1][r-1] + triangle[i-1][r])
        triangle.append(row)

    return triangle
