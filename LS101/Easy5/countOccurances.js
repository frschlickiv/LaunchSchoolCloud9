function countOccurrences(arr) {
    let occurances  = {}
    for(let i = 0; i < arr.length; i++) {
        if(!occurances[arr[i]]) {
            occurances[arr[i]] = 1;
        } else {
            occurances[arr[i]]++;
        }
    }
    return occurances
}




let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

