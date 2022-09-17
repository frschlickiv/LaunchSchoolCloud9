/*function multiplicativeAverage(arr) {
    let prod = 1
    
    for(let i = 0; i < arr.length; i++) {
        prod *= arr[i]
    }
    
    return (prod / arr.length).toFixed(3)
}
*/

function multiplicativeAverage(arr) {
    let prod = arr.reduce((combine, init) => {
       return combine * init;
    })
    
    return (prod / arr.length).toFixed(3)
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"