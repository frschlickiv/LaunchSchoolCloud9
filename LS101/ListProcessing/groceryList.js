/*function buyFruit(arr) {
   let array = []
   for(let i = 0; i < arr.length; i++) {
     for(let j = 0; j < arr[i][1]; j++) {
        array.push(arr[i][0])   
     }
   }
   console.log(array)
}

*/


function buyFruit(arr) {
    let array = arr.map(element => {
        return new Array(element[1]).fill(element[0]);
    }).flat();
    
    console.log(array)
}



buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]