let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let rawArr = Object.values(obj)

let flatArr = rawArr.flat()

let vowels = ['a', 'e', 'i', 'o', 'u']

flatArr.forEach(word => {
    console.log(word)
    word.forEach(letter => {
        if (letter.includes(vowels)) {
            console.log(letter)
        }
    })
})
