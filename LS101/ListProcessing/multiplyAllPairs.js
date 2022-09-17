function multiplyAllPairs(arrTwo, arrEx) {
   
   let mapped = arrTwo.map(ind => {
       return arrEx.map(x => {
           return x * ind
       })
   })
   
   let sorted = ...mapped.sort
 

//let sorted = combined.sort((a, b) => {
//    return a - b
//})



}







multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]