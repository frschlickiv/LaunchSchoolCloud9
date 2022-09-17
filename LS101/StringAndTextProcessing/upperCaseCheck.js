function isUppercase (str) {
     str === str.toUpperCase() ? console.log(true) : console.log(false)
    
}



isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true