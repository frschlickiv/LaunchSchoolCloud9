let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

//(Name) is a (age)-year-old (male or female).


for (let member in munsters) {
    console.log(`${member} is a ${munsters[member]['age']}-year-old ${munsters[member]['gender']}.`)
}