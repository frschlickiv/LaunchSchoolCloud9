let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];



function arrToObj (arr) {
   let objectInd = {}
   arr.map((el, index) => {
       return objectInd[el] = index;
   })
   return objectInd
}


console.log(arrToObj(flintstones))