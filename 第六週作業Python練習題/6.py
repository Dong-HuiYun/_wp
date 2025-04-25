"""
6. 計算字元出現次數
寫一個函數 count_chars(s)，輸入一個字串，回傳每個字元出現的次數，格式為字典。

範例：

count_chars("hello") 
# 輸出: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
"""

def count_chars(s):
    result = {}
    for char in s:
        if char in result:
            result[char] = result[char] + 1
        else:
            result[char] = 1
    return result
print(count_chars("hello"))