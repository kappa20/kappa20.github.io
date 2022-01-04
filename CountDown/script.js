const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const nextYear = new Date("1 Jan 2023"); 

cont();
function cont(){
    const today = new Date();
    const secondsleft = (nextYear - today)/1000;
    const day = secondsleft/3600/24;
    const hour = (day - Math.floor(day))*24 ;
    const minute = (hour - Math.floor(hour))*60 ;
    const second = (minute - Math.floor(minute))*60 ; 
    
    /* minutesLeft = 
    secondsLeft =  */
    
    days.innerHTML = Math.floor(day);
    hours.innerHTML =  Math.floor(hour);
    minutes.innerHTML = Math.floor(minute);
    seconds.innerHTML = Math.floor(second);
    setTimeout(cont, 1000);
}

