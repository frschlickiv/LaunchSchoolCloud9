let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let mapping = arr.map(subArr => {
  
  if (typeof subArr[0] === 'string'){
      return subArr.sort()
   } else {
     return subArr.sort((a, b) => {
          return a - b;
       })
   }
})

console.log(mapping)