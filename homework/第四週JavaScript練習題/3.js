/*
陣列操作

建立一個陣列 numbers = [3, 7, 1, 9, 4]。
將陣列中的數字由小到大排序，並輸出結果。
*/

var numbers = [3, 7, 1, 9, 4];

for (var i = 0; i < numbers.length - 1; i++) {
  for (var j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(numbers); 