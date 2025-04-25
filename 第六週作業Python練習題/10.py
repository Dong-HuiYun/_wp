"""
10. 統計學生總分與平均
輸入一個學生資料的 list，每筆資料是字典，寫一個函數 summary(data)，印出每位學生的總分與平均。

範例輸入：

students = [
    {'name': 'Alice', 'scores': [90, 80, 70]},
    {'name': 'Bob', 'scores': [100, 85, 95]}
]
"""

def summary(data):
    for student in data:
        name = student['name']
        scores = student['scores']
        total_score = sum(scores)
        average = total_score / len(scores)
        print(f"{name} - Total: {total_score}, Average: {average:.2f}")

students = [
    {'name': 'Alice', 'scores': [90, 80, 70]},
    {'name': 'Bob', 'scores': [100, 85, 95]}
]

summary(students)