let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4
console.log(obj1)


let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
console.log(obj2.a.a[2] = 4)