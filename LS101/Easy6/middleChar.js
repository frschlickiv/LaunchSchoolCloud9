function centerOf(str) {
    let L = str.length;
    let oddMiddle = Math.floor(L/2)
    let evenMiddleLower = L/2
    
    
    if (L.length === 1) {
        return str
    } else if (L % 2 === 1) {
        return str.charAt(oddMiddle)
    } else if (L % 2 === 0) {
         return [str.charAt(evenMiddleLower - 1), str.charAt(evenMiddleLower)].join('') ;
    }
    
}










console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"//