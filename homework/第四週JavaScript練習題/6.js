/*
遞迴函數

定義一個遞迴函數 factorial(n)，計算 n 的階乘（n!）。
例如 factorial(5) 應該回傳 120。
*/

function factorial(n) {
    if(n==0||n==1) return 1;
    else{
    return n*factorial(n-1);
    }
  }
  
console.log(factorial(5));