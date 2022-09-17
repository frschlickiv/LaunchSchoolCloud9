

function reverseNumber(num) {
    let str = num.toString()
    let strArr = str.split('')
    let reverse = []
    
    
    
    for (let i = strArr.length-1; i >= 0; i--){
        
        reverse.push(str[i])
    }
    
    
    
    reverse.map(char => {
        if(char)
    })
    
    
    
   //let pastedReverse = reverse.join('')
   //let reverseNum = parseInt(pastedReverse)
   //
   //return reverseNum;
}






console.log(reverseNumber(12345));  