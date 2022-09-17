function xor (a, b) {

return !!((a && !b) || (b && !a))
    
}


console.log(xor(1, 1))
console.log(xor(true, 0))