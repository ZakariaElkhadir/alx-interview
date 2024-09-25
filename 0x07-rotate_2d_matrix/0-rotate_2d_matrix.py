#!/usr/bin/python3
import numpy as np

def rotate_2d_matrix(matrix):
    """Rotate the matrix 90 degrees clockwise."""
    rotated_matrix = np.rot90(matrix, k=-1)  # k=-1 rotates 90 degrees clockwise
    return rotated_matrix