





//------------------------------------------
function leadingSubstrings(str) {
   let charArr = str.split('')
    return charArr.reduce((result, currentChar) => {
        let substring = result.slice(-1) + currentChar;
        return result.concat(substring)
    }, [])
}

//-------------------------
function substrings(input) {
    let acc = []
    let result = []
    for(let i = 0; i <= input.length-1; i++) {
        let range = input.slice(i)
        acc.push(leadingSubstrings(range))
    }
    
    for(let i = 0; i < acc.length; i++){
         for(let j = 0; j < acc[i].length; j++) {
            result.push(acc[i][j])
        }
    }
   
   
    console.log(result)
    
}
    
    
    
    
    







substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]