#!/usr/bin/python3
import numpy as np
"""rotate matrix"""

def rotate_2d_matrix(matrix):
    rotated_matrix = np.rot90(matrix, k=1) 
    return rotated_matrix