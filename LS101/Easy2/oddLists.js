function oddities(arr){
    let oddArr = []
    for (let i = 1; i < arr.length; i += 2){
        oddArr.push(arr[i])
    }
    return oddArr;
}

console.log(oddities([2, 3, 4, 5, 6]));



/*function oddities(arr) {
  return arr.filter((ele, idx) => idx % 2 == 0 );
}*/