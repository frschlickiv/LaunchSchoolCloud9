//let flintstones = ["Fred", "Wilma"];
//flintstones.push(["Barney", "Betty"]);
//flintstones.push(["Bambam", "Pebbles"]);

let flintstones = [["Fred", "Wilma"], ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//console.log(flintstones.concat(["Barney", "Betty"]))

/*let flatFlint = flintstones.reduce((previousValue, currentValue) => {
   return previousValue.concat(currentValue);
}, []);


console.log(flatFlint)
*/

function flatten (arr) {
let flatter = [];

for(let i = 0; i < arr.length; i++) {
   flatter = flatter.concat(arr[i]);
}
 return flatter;
}


console.log(flatten(flintstones))