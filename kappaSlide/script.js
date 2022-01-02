/* document.addEventListener('contextmenu', event => event.preventDefault()); */
var imgIndex = 0
var currentIndex = 0
const nextImg = document.getElementById("next").addEventListener("click",goNext);
const prevImg = document.getElementById("prev").addEventListener("click",goBack);;
const images  = document.getElementsByTagName("img")


/* hide all photos except of shaco photo */
function shaco(){
  let i;
  for(i = 0 ; i < images.length ; i++ ){
    images[i].style.display = "none";
  }
  images[currentIndex % 4].style.display = "block";
}

function goNext(){
  currentIndex++;
  let i;
  for(i = 0 ; i < images.length ; i++ ){
    images[i].style.display = "none";
  }
  images[currentIndex % 4].style.display = "block";
}
function goBack(){
  currentIndex--;
  if (currentIndex === -1){
    currentIndex = 0;
  }
  let i;
  for(i = 0 ; i < images.length ; i++ ){
    images[i].style.display = "none";
  }
  images[currentIndex % 4].style.display = "block";
}
/* executes this function when the window finish loading  */
window.onload = shaco;
