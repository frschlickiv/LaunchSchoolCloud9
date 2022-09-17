function twice (num) {
    let string = String(num);
    let stringHalf = string.length/2;
    if (string.slice(0, stringHalf) === string.slice(stringHalf)){
        console.log(num) ;
    } else {
       console.log(num * 2); 
    }
}





twice(37);          // 74
twice(44);          // 44
twice(444);         // 888
twice(334433);      // 668866
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676