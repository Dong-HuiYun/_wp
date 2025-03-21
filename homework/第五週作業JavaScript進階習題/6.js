/*
6. 用函數作為參數來實現自訂過濾
實作 filterArray(arr, predicate)，回傳符合條件的陣列。
*/

function filterArray(arr, predicate){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    return result;
}
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
// [2, 4]