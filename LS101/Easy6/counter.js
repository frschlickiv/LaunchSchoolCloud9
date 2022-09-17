function sequence(num) {
    let sequencer = []
    
    
    for (let i = 1; i <= num; i++){
        sequencer.push(i)
    }
    
    console.log(sequencer)
}





sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]