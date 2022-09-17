function factorial (n, product){
    if (n === 1) return n
   product = product * factorial(n-1);
   return product
}

console.log(factorial(4));