let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};


for (let key in munsters) {
    console.log(`${key} is ${munsters[key].age} and is a ${munsters[key].gender}`)
}