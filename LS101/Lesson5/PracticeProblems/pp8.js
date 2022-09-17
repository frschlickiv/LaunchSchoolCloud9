let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou'

let vals = Object.values(obj)


vals.forEach(arr => {
    arr.forEach(word => {
        word.split('').forEach(i => {
            if (vowels.includes(i)){
                console.log(i)
            }
        })
    })
})
   



