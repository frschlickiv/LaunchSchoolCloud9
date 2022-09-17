
/*
function sum(num) {
    let strArr = num.toString().split('')
    
    let numArr = strArr.map(int => {
        return Number(int)
    })
    
    let reduce = numArr.reduce((acc, add) => {
        return acc + add
    })
    
    console.log(reduce)
}

*/





function sum(num) {
    
    let strArr = num.toString().split('')
    
    let numArr = strArr.map(int => {return Number(int)})
    
    let reduce = numArr.reduce((acc, add) => {return acc + add})
  
    console.log(reduce)
}




sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45