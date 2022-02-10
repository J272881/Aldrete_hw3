
var hour = prompt('Enter the hour:');
var min = prompt('Enter the minute');
var sec = prompt('Enter the second:')


if (Number(hour) >= 0 && Number(hour) <= 22) {
    NewHour = Number(hour)
    var NewHour;
    NewHour++;
} else if (Number(hour) == 23 && Number(min) == 59 && Number(sec) == 59) {
    var NewHour;
    NewHour = 0;
} else {
    console.log("Error")
}

if (Number(min) >= 0 && Number(min) <= 58) {
    NewMin = Number(min)
    var NewMin;
    NewMin++;
} else if (Number(min) == 59 && Number(sec) == 59) {
    var NewMin;
    NewMin = 0;
} else {
    console.log("Error");
}

if (Number(sec) >= 0 && Number(sec) <= 58) {
    NewSec = Number(sec);
    var NewSec;
    NewSec++;
} else if (Number(sec) == 59) {
    var NewSec;
    NewSec = 0;
}
else {
    console.log("Error");
}

console.log("Time Input:" + hour + "h" + min + "m" + sec + "s");

console.log("One Second Later:" + NewHour + "h" + NewMin + "m" + NewSec + "s");