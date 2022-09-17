

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function exclaim(str){
   let strArr = str.split('')
   console.log(strArr)
   if (strArr[-1] === '!'){
       console.log('true')
   } else {
       console.log('false')
   }
}

exclaim(str1);
exclaim(str2);