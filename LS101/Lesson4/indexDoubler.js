let myNumbers = [1, 4, 3, 7, 2, 6]


function multiplyer (arr, num) {
    for (let i = 0; i < arr.length; i++){
        if(i % 2 === 1) {
            arr[i] = arr[i] * num
        }
    }
    return arr
}

console.log(multiplyer(myNumbers, 3))