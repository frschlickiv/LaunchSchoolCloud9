function getGrade (array) {
  let gradeSum = array.reduce((previousVal, currentVal) => {
       return previousVal + currentVal;
    });
    let average = Math.floor(gradeSum / array.length);
    
    switch (average) {
        case average >= 91:
            console.log('A');
            break;
        case average >= 81:
            console.log('B');
            break;
        case average >= 71:
            console.log('C');
            break;
        case average >= 60:
            console.log('D');
            break;
        case average < 60:
            console.log('F');
            break;
    }
}



getGrade([44, 55, 66, 77, 88, 99]);