// Get the modal
var modal = document.getElementById("contact");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//Get the send button to close and diplay message sent
const sendMsg = document.getElementById('sendMsg');
const noti = document.getElementById('msgNoti')
// When the user clicks on the button, open the modal
const btns = document.getElementsByClassName("sellerInfo");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",  function() {
      modal.style.display = "block";
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function baba(){
    modal.style.display = "none";
    noti.style.transform = "scale(1,1)";
    setTimeout(()=>{
        noti.style.transform = "scale(0,0)";
    },1000)
}
sendMsg.addEventListener("click",baba)
