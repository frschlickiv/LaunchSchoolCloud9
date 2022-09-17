function multisum (num) {
   let arrToSum = []
    
    for(let i = 1; i <= num; i++){
        if (i % 3 === 0 || i % 5 ===0){
            arrToSum.push(i)
        }
    }
   return arrToSum.reduce(
  (previousValue, currentValue ) => previousValue + currentValue, 0)
}

console.log(multisum(1000))