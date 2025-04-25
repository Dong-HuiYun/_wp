"""
3. 奇偶分類
寫一個函數 classify_even_odd(umbers)，將一組整數 list 中的數字分成奇數與偶數，回傳字典：
"""
def classify_even_odd(numbers):
    result = {
  'even': [],
  'odd': []
}
    for num in numbers:
            if num % 2 == 0:
                  result['even'].append(num)
            else:
                  result['odd'].append(num)

    return result
print(classify_even_odd([1, 2, 3, 4, 5, 6]))