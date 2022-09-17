
// takes in a number
//loops the fib sequence until a number with the same return fibonnacci(num).toString.length === n
//uses a do while loop

function fibIndexer(length) {
    let first = 1;
    let second = 1;
    let fibonacci 
    let count = 2;
    do {
      fibonacci = first + second;
      count++;
      first = second;
      second = fibonacci
    } while (String(fibonacci).length < length);
    return count;
}

console.log(fibIndexer(3))







