function average(arr) {
    let sum = arr.reduce((combine, init) => {
       return combine + init;
    })
    
    let average = Math.floor(sum/arr.length)
    console.log(average)
} 

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40