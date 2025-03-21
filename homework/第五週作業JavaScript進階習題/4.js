/*
4. 物件深度合併
實作 deepMerge(obj1, obj2)，將 obj2 合併到 obj1，如果鍵值是物件則遞迴合併。
*/

function deepMerge(obj1, obj2){
    let result = { ...obj1 }; 
    for (let key in obj2) {
        if (obj2[key] instanceof Object && key in obj1) {
            result[key] = deepMerge(obj1[key], obj2[key]); 
        } else {
            result[key] = obj2[key]; 
        }
    }
    return result;
}

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));
/*
{
  a: 1,
  b: { x: 2, y: 5, z: 6 },
  c: 7
}
*/