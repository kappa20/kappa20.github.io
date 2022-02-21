
var images = document.querySelectorAll("img");
/* make all images opacity 0 by default */

var role = "x"
changesrc(role);
var cad  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var xplaces = [];
var oplaces = [];
var round = 1
var xSourceImage = "./croix.svg";
var oSourceImage = "./circle.svg";
for(let j = 0;j<images.length ; j++){
    images[j].addEventListener("mouseenter",function(){
        if(this.style.opacity === "0"){
            this.style.opacity ="0.5"
        }
    })
    images[j].addEventListener("mouseleave",function(){
        if(this.style.opacity === "0.5"){
            this.style.opacity ="0"
        }
    })
    images[j].addEventListener("click",function(){
        if(role === "x" && this.style.opacity !=="1"){
            this.style.opacity = "1";
            if(xplaces.length < round){
                xplaces.push(Number(this.alt));
                console.log(xplaces)
            }
            
            if(checkWinner(xplaces)){
                alert(`${role.toUpperCase()} Wins`)
               location.reload();
               
            
            }
            role ="o"
            changesrc(role)
        }
        else if(role ==="o" && this.style.opacity !=="1"){
            this.style.opacity = "1";
            if(oplaces.length < round){
                oplaces.push(Number(this.alt));
                console.log(oplaces)
                round+=1
            }
            
            if(checkWinner(oplaces)){
                
                
                alert(`${role.toUpperCase()} Wins`);
                location.reload();
                
            }
            role = "x"
            changesrc(role)
            
        }
        if(oplaces.length + xplaces.length === 9){
            alert("TIE")
        }
        
    })

}
 
function changesrc(role){
    if(role === "x"){
        for(let i = 0; i< images.length ; i++){
            if(images[i].style.opacity !== "1"){
                images[i].setAttribute("src",xSourceImage)
                images[i].style.opacity = "0"
            }
            
        }
    }
    if(role === "o"){
        for(let i = 0; i< images.length ; i++){
            if(images[i].style.opacity !== "1"){
                images[i].setAttribute("src",oSourceImage)
                images[i].style.opacity = "0"
            }
            
        }
    }
    
}

function checkWinner(){

}

function reset(){
    for(let i = 0 ; i < images.length ; i++){
        images[i].style.opacity = "0"   
    }
    xplaces = []
    oplaces = []
}


function checkWinner(arr){
    var winner ;
    for(let i = 0 ;i < cad.length ; i++){
        winner = true
        for(let j = 0 ; j < 3;j++){
            if(arr.indexOf(cad[i][j]) === -1){
                winner = false;
                break;
            }
        }
    if(winner === false){
        continue;
    }else if(winner === true){
        reset();
       return true;
    }
}
return false
}