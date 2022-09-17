/*
function leadingSubstrings(str) {

 let substrings = []
 
 for (let i = 1; i <= str.length; i++){
     substrings.push(str.slice(0, i))
 }


console.log(substrings)
  // console.log(mappedIndecies)
}
*/

/*
function leadingSubstrings(str) {
    let strArr = str.split('') 
    let result = []
    let joinWord
    
   let substrings = strArr.map(index => {
     return strArr.slice(0, index)
    })
    
    console.log(substrings)
}

*/



function leadingSubstrings(str) {
   let charArr = str.split('')
    return charArr.reduce((result, currentChar) => {
        let substring = result.slice(-1) + currentChar;
        return result.concat(substring)
    }, [])
}



leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


//takes in a string
//split the string into an array
//loop through the argument array
//that loop returns 
//