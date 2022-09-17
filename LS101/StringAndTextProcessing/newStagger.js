 
 function staggeredCase(str) {
     let splitted = str.split('')
     
     
     for (let i = 0; i < splitted.length; i++) {
         if (splitted[i] === 0) {
             splitted[i] = splitted[i].toUpperCase()
         } else if (splitted[i].match(/a-z/gi)){
             for(let j = i - 1; j > 0; j--){
                 if(splitted[j].match(/a-z/)) {
                     splitted[i] = splitted[i].toUpperCase()
                 } else {
                  
                 } 
             }
         }
     }
     
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");