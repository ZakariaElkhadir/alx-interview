#!/use/bin/python3
"""Prime Game"""

def isWinner(x, nums):
    """Prime Game"""
    def is_prime(n):
        """Check if a number is prime"""
        if n <= 1:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

    def count_primes(n):
        """Count the number of prime numbers up to n"""
        count = 0
        for i in range(2, n + 1):
            if is_prime(i):
                count += 1
        return count

    maria_wins = 0
    ben_wins = 0

    for num in nums:
        if count_primes(num) % 2 == 1:
            maria_wins += 1
        else:
            ben_wins += 1

    if maria_wins > ben_wins:
        return "Maria"
    elif ben_wins > maria_wins:
        return "Ben"
    else:
        return None
