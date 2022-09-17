function sequence (a, b){
    let accu = b
    let arr = []
    
    for(let i = a; i > 0; i--) {
       arr.push(accu)
       accu += b
    }
    
    console.log(arr)
}










sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []