/*
1. 計算字串中字母出現的次數
實作 countLetters(str)，輸入一個字串，回傳一個 Map，其鍵為字母，值為該字母出現的次數。
*/

function countLetters(str) {
    let letterMap = new Map(); 

    for (let char of str) { 
        if (letterMap.has(char)) {
            letterMap.set(char, letterMap.get(char) + 1); 
        } else {
            letterMap.set(char, 1); 
        }
    }

    return letterMap;
}

console.log(countLetters("banana")); 
// Map { 'b' => 1, 'a' => 3, 'n' => 2 }