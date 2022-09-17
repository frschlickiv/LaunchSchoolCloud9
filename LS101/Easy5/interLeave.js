function interleave (arr1, arr2) {
    let interArr = []
    
    for (let i = 0; i < arr1.length; i++) {
       interArr.push(arr1[i])
       interArr.push(arr2[i])
    }
    
    return interArr
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]