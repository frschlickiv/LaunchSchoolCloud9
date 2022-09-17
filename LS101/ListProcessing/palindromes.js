function palindromes (str) {
    let results = []
    for(let i = 0; i <= str.length; i++){
       let segment = str.slice(i)
       for(let j = 0; j <= segment.length; j++){
           if(segment.slice(0, j).split('').reverse().join('') === segment.slice(0, j)){
            results.push(segment.slice(0, j)) 
        }
       }
    }
    let cleaner = results.filter(word => word.length > 1)
    console.log(cleaner)
}













palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]