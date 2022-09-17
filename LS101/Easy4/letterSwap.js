function swap(str) {
    let strArr = str.split(' ')
    let switchedArr = strArr.map(el => el.split('').reverse().join(''))
    return switchedArr.join(' ')
}




console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"