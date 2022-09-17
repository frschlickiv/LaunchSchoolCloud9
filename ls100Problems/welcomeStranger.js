function greetings(arr, obj) {
    let name = arr.join(' ')
    let job = Object.values(obj).join(' ')
    return `Hello, ${name}! Nice to have a ${job} around.`
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }))


