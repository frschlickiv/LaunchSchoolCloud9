 function alphabetize(nums =  [0, 1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19]) {
     let numWord = {
         0: 'zero',
         1: 'one',
         2: 'two',
         3: 'three',
         4: 'four',
         5: 'five',
         6: 'six',
         7: 'seven',
         8: 'eight',
         9: 'nine',
         10: 'ten',
         11: 'eleven',
         12: 'twelve',
         13: 'thirteen',
         14: 'fourteen',
         15: 'fifteen',
         16: 'sixteen',
         17: 'seventeen',
         18: 'eighteen',
         19: 'nineteen',
         20: 'twenty'
     }
     
    let wordify = nums.map(index => {
      return numWord[index]
    })

     console.log(wordify.sort())

 }


 alphabetize([1, 2, 3])
 
 
 
 
 //take in an array of numbers
 //loop through it to check values against the object
 //create a new array using 
 
 