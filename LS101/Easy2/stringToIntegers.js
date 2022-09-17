function stringToInteger(string) {
    const DIGITS = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
    };
    let arrayOfDigits = string.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => {
        value = (10 * value) + digit;
    });
    return value
};



function stringToSignedInteger(string){
    if(string.charAt(0) === '-'){

      return stringToInteger(string.substring(1)) * -1;  
    } else if (string.charAt(0) === '+') {
     return  stringToInteger(string.substring(1)); 
    } else {
        return stringToInteger(string)
    }
}

console.log(stringToSignedInteger("-570"))
console.log(stringToSignedInteger("+570"))
console.log(stringToSignedInteger("570"))