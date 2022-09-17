function letterCaseCount(str) {
    let strSplit = str.split('')
    
    console.log(strSplit)
    
    let obj = {
        lowercase: 0,
        uppercase: 0,
        neither: 0
    }
    
    
    strSplit.forEach(ind => {
        if (ind.match(/[a-z]/g)){
            obj.lowercase += 1
        } else if (ind.match(/[A-Z]/g)){
            obj.uppercase += 1
        } else {
            obj.neither += 1
        } 
        
    
    })
    
    
    
    
    console.log(obj)
}


letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }