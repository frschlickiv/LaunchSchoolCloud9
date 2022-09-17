function timeConvert (mins) {
    let leftoverMinutes;
    let hours;
    let minutes;
    if (Math.abs(mins) >= 1440) {
    leftoverMinutes = Math.abs(mins) % 1440
    } else {
        leftoverMinutes = mins;
    }
    
    if (leftoverMinutes > 60) {
        hours = Math.floor(leftoverMinutes / 60)
        minutes = leftoverMinutes % 60
    }
    
    let time = [hours, minutes]
    return time
}

/*
function timeOfDay(num) {
   let hours;
   let minutes;
    if(Math.sign(num) === -1){
         hours = 24
         minutes = 60
         
         
    } else if (Math.sign(num) === 1) {
         hours = 0;
         minutes = 0
    }
    
    
}
*/

console.log (timeConvert(800))

/*
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(0) === "00:00
*/