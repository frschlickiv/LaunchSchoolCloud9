function sumOfCharCode (str) {
    let sum = 0
    for (let i = 0; i < str.length; i++){
        sum += str[i].charCodeAt()
    }
    return sum;
}

console.log(sumOfCharCode('Launch School'))