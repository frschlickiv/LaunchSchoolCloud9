function stringy (num) {
    let convert = '10'
    
    if (num % 2 === 0){
        return convert.repeat(num/2)
    } else if (num % 2 === 1){
        return convert.repeat(num/2) + '1'
    }
}


console.log(stringy(7))


function straang(number){
    let result = ''
    for (let i = 0; i < number; i++){
        let number = ((i % 2) === 0) ? 1 : 0;
        result += number;
    }
    return result;
}

console.log(straang(8))