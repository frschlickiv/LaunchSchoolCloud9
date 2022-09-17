function multiplyList (arr1, arr2) {
    let newArr = []
    
for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] * arr2[i])
    }
    
    console.log(newArr)
}


multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]