"""
8. 判斷質數
寫一個函數 is_prime(n)，輸入一個整數 n，回傳是否為質數（True/False）。
"""

def is_prime(n):
    if n <= 1:
        return False
    
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    
    return True

print(is_prime(7))
print(is_prime(10))
print(is_prime(13))
print(is_prime(1))
print(is_prime(0))