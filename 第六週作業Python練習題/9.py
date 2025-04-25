"""
9. 找出 list 中出現次數最多的數字
寫一個函數 most_common(nums)，輸入一個整數 list，找出其中出現次數最多的數字（可用字典記錄出現次數）。
"""

def most_common(nums):
    if not nums:
        return None
    count = {}
    for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    max_count = 0
    most_common_num = None
    for num, freq in count.items():
        if freq > max_count:
            max_count = freq
            most_common_num = num

    return most_common_num

print(most_common([1, 2, 2, 3, 3, 3, 4]))