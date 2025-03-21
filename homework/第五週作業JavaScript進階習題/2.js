/*
2. 陣列去重並排序
實作 uniqueSorted(arr)，移除陣列重複的元素並從小到大排序。
*/

function uniqueSorted(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8])); 
// [1, 3, 5, 8]
