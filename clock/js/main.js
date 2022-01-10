let hour = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");
//lets make a recursive function to call it self 
//every 1000ms = 1 sec;

//lets call the function when the browser window finish loading the document
window.onload = showTime;
//let s test and see if the function is running *
let count = document.getElementById("count");
function showTime(){
    var time = new Date()
    var currentHour = time.getHours();
    var currentMinute = time.getMinutes();
    var currentSecond = time.getSeconds();
    hour.style.transform = `rotate(${(currentHour+currentMinute*(1/60))*(30)}deg)`
    minutes.style.transform = `rotate(${currentMinute*6}deg)`
    seconds.style.transform = `rotate(${currentSecond*6}deg)`
    setTimeout(showTime, 1000);
   
}