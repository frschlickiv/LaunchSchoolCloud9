let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr.map(el => {
    for (let key in el){
        el[key] += 1;
    }
    return el
}))