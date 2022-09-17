function staggeredCase(str){
    let splitStr = str.split('')
    
    for (let i = 0; i < splitStr.length; i++){
        if(i % 2 === 0){
            splitStr[i] = splitStr[i].toUpperCase()
        } else if (i % 2 === 1) {
            splitStr[i] = splitStr[i].toLowerCase()
        }
    }
    
    console.log(splitStr.join(''))
}



staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"