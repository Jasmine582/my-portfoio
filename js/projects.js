//Coming Soon section
//launch Date
var launchDate = new Date("JUN 05,2021 00:00:00") .getTime();

//seconds
var x= setInterval(function() {

//today's date and time
var now = new Date().getTime();

//difference of date
var difference = launchDate - now;

// days, hrs, mins, and secs calculations
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24 )) / (1000 * 60 *60));
var minutes = Math.floor ((difference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor ((difference % (1000 * 60)) / 1000);

document.getElementById("clock").innerHTML = days + " Days | " + hours + " Hours | " + minutes + " Minutes | " + seconds + " Seconds ";

if (difference < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED"; 
}

},1000);