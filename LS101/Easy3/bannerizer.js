function  bannerize(string) {
    let horizontalRule = `+${"-".repeat(string.length + 2)}+`
    let emptyLine = `|${" ".repeat(string.length + 2)}|`;
    
    
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}


bannerize('Frederick Schlick')