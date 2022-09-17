const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedNumberToString(number){
    switch (Math.sign(number)){
        case -1:
            return `-${integerToString(-number)}`;
        case +1:
            return `+${integerToString(number)}`;
        default:
        return integerToString(number);
    }
}



function integerToString(number) {
  let result = '';

 do {
     let remainder = number % 10;
     number = Math.floor(number / 10)
     result = DIGITS[remainder] + result
     
 } while (number > 0)

 return result;
 
};




console.log(signedNumberToString(-16546165))
