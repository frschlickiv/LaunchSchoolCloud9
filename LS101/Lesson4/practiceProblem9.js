let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesVals = Object.values(ages);

let total = agesVals.reduce((prev, current) => {
    return prev + current;
})

console.log(total)