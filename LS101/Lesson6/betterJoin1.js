function joinOr(arr, opt1, opt2) {
    let newArr = []
    
    if(arr === []) console.log('')
    if(arr.length === 1) console.log(String(arr))
    
    
    
    for(let i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
      
       if (opt1) {
        newArr.push(opt1)
      } else {
        newArr.push(', ')
      }
    }
     
      
      if (opt2) {
        newArr.splice(newArr[-2], 0, opt2)
      } else {
        newArr.splice(newArr[-2], 0, ' or')
      }
     
     
     
 newArr.pop()
 let joined = newArr.join('')
console.log(joined)

     
  }

  
  
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"






 /* if (opt2) {
        if(i === arr.length-2) {
          newArr[]
      } else {
         if(i === arr.length-2) {
          newArr.push('or')
      }
     }
    }
      */