let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let indexOfEnd = advice.indexOf('house')
let adviceTemplate = advice.slice(0, indexOfEnd);

console.log(adviceTemplate)