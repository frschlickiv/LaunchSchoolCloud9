let munstersDescription = "The Munsters are creepy and spooky.";


function caseFlip (str){
let swapped = ''
for (let i = 0; i < munstersDescription.length; i++) {
    if (str[i] === str[i].toUpperCase()){
        swapped += str[i].toLowerCase()
    } else {
        swapped += str[i].toUpperCase();
    }
  }
  return swapped;
}

console.log(caseFlip(munstersDescription))