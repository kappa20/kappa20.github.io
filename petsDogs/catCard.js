const favoris = document.getElementsByClassName("favoris");
const alertText = document.querySelector(".alert-text");
const alertIcon = document.querySelector(".alert-icon");
const alert = document.getElementById("alert");
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



