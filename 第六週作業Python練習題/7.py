"""
7. 字典轉換為字串
寫一個函數 dict_to_string(d)，將字典轉換為類似：

{'a': 1, 'b': 2} -> "a:1, b:2"
"""
def dict_to_string(d):
    items = []
    for key, value in d.items():
        items.append(f"{key}:{value}")
    return ", ".join(items)

print(dict_to_string({'a': 1, 'b': 2}))