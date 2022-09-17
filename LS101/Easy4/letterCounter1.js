function wordSizes (str) {
    let counter = {}
    let strArr = str.split(' ')
    
    
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length === 0) {
          continue
      } else if (!counter[strArr[i].length]) {
          counter[strArr[i].length] = 1
      }  else {
          counter[strArr[i].length]++
      }
    }
    
    return counter
}







console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}