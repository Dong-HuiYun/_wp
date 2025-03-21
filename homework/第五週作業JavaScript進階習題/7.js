/*
7. 請寫一個向量物件，要包含加減與內積運算
實作 class Vector {...}
*/

class Vector {
    constructor(components) {
        this.components = components;
    }
    add(otherVector) {
        const result = this.components.map((value, index) => value + otherVector.components[index]);
        return new Vector(result);
    }
    sub(otherVector) {
        const result = this.components.map((value, index) => value - otherVector.components[index]);
        return new Vector(result);
    }
    dot(otherVector) {
        return this.components.reduce((sum, value, index) => sum + value * otherVector.components[index], 0);
    }
}
let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);
console.log(a.add(b).components);
console.log(a.sub(b).components);
console.log(a.dot(b));