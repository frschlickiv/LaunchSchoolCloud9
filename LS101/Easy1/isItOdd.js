function isOdd (num) {
    
    let absNum = Math.abs(num)
    
  return  absNum % 2 === 1 ? true : false;
}











console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true