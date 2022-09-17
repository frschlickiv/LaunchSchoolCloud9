function swapName(name) {
   let lastFirst = name.split(' ')
   return [lastFirst[1], lastFirst[0]].join(', ')
}



console.log(swapName('Joe Roberts'));    // "Roberts, Joe"