"""
2. 計算平均值
寫一個函數 average(nums)，輸入一個整數 list，回傳平均值（小數點取到一位）。
"""
def average(nums):
    if not nums:
        return None
    
    avg = sum(nums) / len(nums)
    return round(avg, 1)
print(average([10, 20, 30]))