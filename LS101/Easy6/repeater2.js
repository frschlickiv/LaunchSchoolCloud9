function repeater(str) {
  let doubled = []
  let strArr = str.split('')
  let exceptions = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  



for (let i = 0; i < strArr.length; i++){
   
   if (exceptions.includes(strArr[i].toLowerCase())){
       doubled.push(strArr[i], str[i])
     } else {
       doubled.push(strArr[i])
   }
}
let clean = doubled.join('')
return clean;
}

console.log(repeater('July 4th'))