function rotateRightmostDigits (num, digits) {
    
let splitArr = String(num).split('')   

let lastNums = splitArr.slice(-digits)  
let firstNums = splitArr.slice(0, splitArr.length - digits)
  
  lastNums.push(lastNums.shift())
  
let newSet = firstNums.concat(lastNums)

console.log(Number(newSet.join('')))
   
}





rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917