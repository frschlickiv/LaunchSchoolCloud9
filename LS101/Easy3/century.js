//write a function century that takes in a number and returns the century its in with the appropriate suffix
//find the century by % the number by 100

function centuryFinder (year) {
    let century = Math.ceil(year / 100);
    let stringCentury = String(century);
   
   
   if (['11', '12', '13'].includes(stringCentury.slice(century.length - 2))) return stringCentury + 'th century';
   
    if (stringCentury.endsWith('1')){
        return `${stringCentury}st century`;
    } else if (stringCentury.endsWith('2')){
        return `${stringCentury}nd century`;
    } else if (stringCentury.endsWith('3')){
        return `${stringCentury}rd century`;
    } else {
        return `${stringCentury}th century`;
    }
    
}

console.log(centuryFinder(1112))