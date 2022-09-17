function palindrome(str) {
   return str === str.split('').reverse().join('') ? true : false;
}

console.log(palindrome("madam i'm adam"))