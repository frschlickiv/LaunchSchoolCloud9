function formatter (str) {
    let firstLetter = str.substring(0, 1)
    let stringBody = str.substring(1)

    return firstLetter.toUpperCase() + stringBody.toLowerCase()
}

console.log(formatter("the Munsters are CREEPY and Spooky."))