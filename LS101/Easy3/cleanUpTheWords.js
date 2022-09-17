//inputs a string
//outputs a string that has removed all non alphetic characters and 


function wordCleaner (str) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let stringArray = str.split('');
    let cleanArr = [];
    
    stringArray.forEach(el => {
        if (letters.includes(el)) {
            cleanArr.push(el)
        } else {
            cleanArr.push(' ')
        }
    })
   
   let filteredArr = cleanArr.filter((item, pos, arr) => {
  // Always keep the 0th element as there is nothing before it
  // Then check if each element is different than the one before it
  return pos === 0 || item !== arr[pos-1];
});
    
    console.log(filteredArr.join(''))
}



wordCleaner("---what's my +*& line?")