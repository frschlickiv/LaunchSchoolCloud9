let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


let ageGender = Object.values(munsters)
let total = 0
ageGender.forEach(obj => {
    if (obj.gender === 'male') total += obj.age
})
console.log(total)