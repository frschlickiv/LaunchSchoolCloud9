function triangle (baseNum) {
  
  let bricks = '*'
  
  for (let i = 0; i < baseNum; i++) {
      let padding = baseNum - i;
      console.log(`${bricks.padStart(padding, ' ')}${bricks.repeat(i)}`)
  }
}

triangle(20)