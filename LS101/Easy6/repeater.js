
function repeater(str) {
  let doubled = []
  let strArr = str.split('')
  

if (str === ''){
    return str;
} else {

for (let i = 0; i < strArr.length; i++){
    doubled.push(strArr[i])
    doubled.push(strArr[i])
    }
}
let clean = doubled.join('')

return clean;

}





console.log(repeater('Good job!'))

console.log(repeater(''))