/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.
*/


//P
//inputs string 
//returns an object 





function duplicates(string) {
    let countObj = {};
    let count = 0 ;
    let strToArr = string.toLowerCase().split('');
    for (let i = 0; i < strToArr.length; i++){
        if(!countObj[strToArr[i]]){
           countObj[strToArr[i]] = 1;
        } else {
            countObj[strToArr[i]]++;
        }
    }
        console.log(countObj)
    
    for (let key in countObj) {
      if (key === ' ') {
          continue;
      } else if (countObj[key] > 1) {
          count++
      }
    }
    console.log(count);
}
    
    
    
    duplicates('awdxcqad adsS assx zdq')