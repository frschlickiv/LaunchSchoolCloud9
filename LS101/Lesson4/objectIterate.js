let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(obj) {
    let newObj = {}
    for (let key in obj) {
        if (obj[key] === 'Fruit') {
            newObj[key] = obj[key];
        }
    }
    
    console.log(newObj)
}