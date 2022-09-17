function penultimate (str) {
    let strArr = str.split(' ')
    
    if (strArr.length === 1){
        return "Please enter more than one word."
    } else {
    return strArr[Math.round(strArr.length / 2)];
 }
}

console.log(penultimate("Launch school is super cool for all the kids in town duh!"))