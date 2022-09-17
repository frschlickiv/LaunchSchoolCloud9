/*
a function that returns the sum of two numbers
a function that takes an array of strings, and returns a string 
that is all those strings concatenated together
a method that takes an array of integers, 
and returns a new array with every other element from the original array, starting with the first element. For instance:*/



/*
START
SET function adder => with two parameters (num1, num2)

SET result = num1 + num2 RETURN



*/


/*function merge (arr1, arr2){
  let newArr = []
  for (let i = 0; i < arr1.length; i++){
      newArr.push(arr1[i])
      newArr.push(arr2[i])
  }
  return newArr
}

console.log(merge([1, 2, 3], [4, 5, 6]))

*/

/*a function that determines the index of the 3rd 
occurrence of a given character in a string. For instance, 
if the given character is 'x' and the string is 'axbxcdxex', 
the function should return 6 (the index of the 3rd 'x'). 
If the given character does not occur at least 3 times, return null.*/

function indexer(str, char){
    let counter = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] === char){
            counter++
        } else if (counter === 3){
            return i
        } else if (i === str.length - 1 && counter !== 3){
            return 'There is not a third occurance.'
        }
    }
   
}

console.log(indexer('xtsxtxdfg', 'x'))