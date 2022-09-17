function reverseNumber(num)
{
  let s = num.toString()
  let arr = []
  for(let i = s.length - 1; i >= 0; i--)
    {
        if(s[i] !== '0' || i !== s.length - 1)
        {
            arr.push(s[i])
        }            
    }
  console.log(parseInt(arr.join('').toString()))
}



reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12001000000000000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1