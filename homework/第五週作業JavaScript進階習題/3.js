/*
3. 計算陣列數字總和
實作 sumArray(arr)，計算數字陣列的總和。
*/

function sumArray(arr){
    let sum = 0;
    for(let num of arr)
    {
        sum = sum + num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); 
// 10