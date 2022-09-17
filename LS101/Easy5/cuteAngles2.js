//takes a float representing an angle between 0 - 360
//returns a string that looks like 254°35'59" degrees -> minutes -> seconds



function dms(angle) {

//standardize a positive angle
angle %= 360

if(angle < 0) angle += 360;
//Find the degree
const degree = Math.floor(angle)
//access the float
angle -= degree;

let minutes = Math.floor(angle * 60)
let seconds = Math.floor(((angle * 60) - minutes) * 60)

console.log( `${degree}° ${minutes < 10 ? '0' + minutes : String(minutes)}' ${seconds < 10 ? '0' + seconds : String(seconds)}" `)

//

}






dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"