#!/usr/bin/python3
"""lock boxes"""


def canUnlockAll(boxes):
    """doc doc"""
    n = len(boxes)
    unlocked = [False] * n
    unlocked[0] = True

    keys = [0]

    while keys:
        # pop: remove and return the element
        current_key = keys.pop()
        # If the box is within range and not yet unlocked
        for key in boxes[current_key]:
            if key < n and not unlocked[key]:
                unlocked[key] = True
                keys.append(key)

    return all(unlocked)
