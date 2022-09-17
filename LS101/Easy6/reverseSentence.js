function reverseWords(str) {
    let sentenceArray = str.split(' ')
    let contain = []
    
    for(let i = 0; i < sentenceArray.length; i++) {
        if(sentenceArray[i].length >= 5) {
           contain.push(sentenceArray[i].split('').reverse().join('')) 
        } else {
            contain.push(sentenceArray[i])
        }
    }
return contain.join(' ')
}





console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"