function swapCase(str) {
    return str.split('').map(ind => {
      return  ind.match(/[a-z]/) ?  ind.toUpperCase() :  ind.toLowerCase()}).join('')
}










console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"