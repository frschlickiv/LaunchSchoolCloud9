
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}




function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  console.log(dotSeparatedWords)
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}



isDotSeparatedIpAddress('21.22.31.24')