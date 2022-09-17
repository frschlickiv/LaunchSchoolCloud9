function indexSize (index) {
    let charOps = 'abcdefghijklmnopqrstuvwxyz';
    let scraped = index.split('');
    let newSpreadIndex = [];
    
    
    for (let j = 0; j < scraped.length; j++) {
      if(charOps.includes(scraped[j].toLowerCase())) {
          newSpreadIndex.push(scraped[j]);
      }  
    }
    return newSpreadIndex.length;
}

function wordSizes(str) {
  let arrStr = str.split(' ')
  let counter = {}
  
  for (let i = 0; i < arrStr.length; i++) {
    if (indexSize(arrStr[i]) === 0) {
      continue
    } else if (!counter[indexSize(arrStr[i])]){
      counter[indexSize(arrStr[i])] = 1
    } else {
      counter[indexSize(arrStr[i])]++
    }
  }
  return counter;
}




console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}