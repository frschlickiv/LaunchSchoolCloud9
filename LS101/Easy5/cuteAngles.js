function dms(angle) {
  angle %= 360;
  if (angle < 0) angle += 360;
  let degrees = Math.floor(angle);
  angle -= degrees;
  let minutes = Math.floor(angle * 60);
  let seconds = Math.floor(((angle * 60) - minutes) * 60);
  return `${degrees}°${minutes < 10 ? '0' + minutes : String(minutes)}'${seconds < 10 ? '0' + seconds : String(seconds)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
dms(254.6);        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"