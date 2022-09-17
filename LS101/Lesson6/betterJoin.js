function joinOr (arr, delimiter = ', ', word = 'or') {
  
  switch (arr.length) {
  
  case 0:
    return ''
  case 1: 
    return `${arr[0]}`
  case 2: 
    return `${arr[0]} or ${arr[1]}`
  default: 
    return arr.slice(0, arr.length-1).join(delimiter) + `${delimiter}${word} ${arr[arr.length-1]}`
  
 }
}






















/*

function joinOr(arr, opt1, opt2) {
  let newArr = arr;

  if (arr.length === 1) {
    return arr.toString();
  } else if (arr.length === 0) {
    return "";
  }


else if (arr.length === 2) {
  return `${arr[0]} or ${arr[1]}`};

  for (let i = 0; i < arr.length; i++) {
    
    if (opt1) {
      newArr[i] = arr[i] + opt1;

      if (!opt2) {
        newArr[arr.length - 1] = opt1 + "or " + arr[arr.length - 1];
      } else {
        newArr[arr.length - 1] = opt1 + opt2 + " " + arr[arr.length - 1];
      }
    } else {
      if (i === arr.length - 1) {
        newArr[i] = ", or " + arr[i] ;
      } else {
        newArr[i] = arr[i] + ", ";
      }
    }

    return newArr.join("").toString();
  }
}
*/
console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], "; ")); // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ", ", "and")); // => "1, 2, and 3"
console.log(joinOr([])); // => ""
console.log(joinOr([5])); // => "5"
console.log(joinOr([1, 2])); // => "1 or 2"
