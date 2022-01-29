const favoris = document.getElementsByClassName("favoris");
const alertText = document.querySelector(".alert-text");
const alertIcon = document.querySelector(".alert-icon");
const alert = document.getElementById("alert");
var success = new Audio("success1.mp3");
var removed = new Audio("bad.mp3")
for(let i = 0;i < favoris.length ; i++){
    favoris[i].addEventListener("click",()=>{
        if(favoris[i].style.color !== "orange"){
            favoris[i].style.color = "orange"
        }
        else{
            favoris[i].style.color = "black"
        }
    })
}



/* function removeAlert(){
    alert.classList.remove("alert-animation")
}
var yell = 0;
var bla = 0;

function everytime(){
    
    if(favoris.style.color === "orange" && yell === bla){
        yell+=1;
        alertText.innerText = "Added To Favorites"
        alertIcon.src="yes.png",
        alert.classList.add("alert-animation");
        setTimeout(removeAlert, 3500);
    }
    if(favoris.style.color !== "orange" && bla < yell){
        bla+=1
        alertText.innerText = "Removed From Favorites"
        alertIcon.src="no.png",
        favoris.style.color = "black";
        alert.classList.add("alert-animation");
        setTimeout(removeAlert, 3500);
    }
} */
/* window.load = setInterval(everytime, 1  ); */
/* favoris.style.color = "yellow" */
/* function playAudio (src) {
    if(window.Audio) {
       Audio.pause();
    }
    window.Audio = new Audio (src);
    window.Audio.play();
} */