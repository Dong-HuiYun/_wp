def find_max(numbers):
    if not numbers:
        return None 
    
    max_num = numbers[0]
    for num in numbers[1:]:
        if num > max_num:
            max_num = num
    return max_num

print(find_max([1,5,2]))