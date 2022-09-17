function isRealPalindrome(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz1234567890".split("");

  let brokenStr = str.toLowerCase().split("");

  let filteredArr = brokenStr.filter((el) => letters.includes(el));

  let filteredStr = filteredArr.join("");
  let reversedStr = filteredArr.reverse().join("");

  console.log(filteredStr === reversedStr ? true : false);
}

isRealPalindrome("madam"); // true
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome("Madam"); // true (case does not matter)
isRealPalindrome("356653"); // true
isRealPalindrome("356a653"); // true
isRealPalindrome("123ab321"); // false
