//greetings 
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 17) {
    greeting = "Hey There!"; //Good Evening
} else if (hourNow > 11) {
    greeting =  "Hi There!"; //Good Afternoon
} else if (hourNow > 0) {
    greeting = "Greetings!";//Good Morning
} else {
    greeting = "Hi World!"
}

document.getElementById('greeting').innerHTML = greeting +`<p> My name is Jasmine. I am a self taught coder that develops and occasionally designs <span>unique</span> websites!</p>`;
document.getElementById('quote').innerHTML = quote;
document.getElementById ('fav-quote').innerHTML = title;
