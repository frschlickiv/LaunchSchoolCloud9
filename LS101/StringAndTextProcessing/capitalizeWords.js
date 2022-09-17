function wordCap(str) {
   let strSplit = str.split('')
   
   for (let i=0; i < strSplit.length; i++) {
       if (i === 0){
           strSplit[i] = strSplit[i].toUpperCase()
       } else if (strSplit[i] === '"'){
           continue;
       } else if(strSplit[i] === ' '){
          strSplit[i+1] = strSplit[i+1].toUpperCase()
       }  
   }
   
  console.log(strSplit.join(''))
}







wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'