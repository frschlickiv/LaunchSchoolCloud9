function negative(num) {
    if (num >= 0) {
       return parseInt(`-${num}`)
        
    } else {
        return num
    }
}





function negative(number) {
  return Math.abs(number) * -1;
}






console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0