/*
陣列過濾

建立一個陣列 nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]。
過濾出所有的偶數，並輸出新的陣列。
*/

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNums = [];

for(var i = 0; i < nums.length; i++)
{
    if(nums[i] % 2 == 0)
    {
        evenNums.push(nums[i]);
    }
}
console.log(evenNums);