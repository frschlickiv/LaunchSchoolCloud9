function sumOfSums (arr) {
    let results = []
    
    for(let i = 1; i <= arr.length; i++){
     let segments = []
      let segment = arr.slice(0, i)  
      results.push(segment)
    }
let x = results.map(index => {
   let y = index.reduce((acc, add) => {
        return acc + add;
    })
    return y
})
    let final = x.reduce((acc, add) => {
        return acc + add;
    })
    
    console.log(final)
}








sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35