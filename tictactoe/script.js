
var images = document.querySelectorAll("img");
/* make all images opacity 0 by default */

var role = "x"
changesrc(role);
var cad  = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var xplaces = [];
var oplaces = [];
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
        if(role === "x"){
            this.style.opacity = "1";
            
            xplaces.push(Number(this.alt));
            if(checkWinner(xplaces,role)){
               alert(`${role.toUpperCase()} Wins`);
                reset();
                xplaces = [];
                oplaces = []
            }
            role ="o"
            changesrc(role)
        }
        else if(role ==="o"){
            this.style.opacity = "1";
            oplaces.push(Number(this.alt));
            if(checkWinner(oplaces,role)){
             alert(`${role.toUpperCase()} Wins`);
                reset();
                xplaces = [];
                oplaces = []
            }
            role = "x"
            changesrc(role)
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


function checkWinner(arr,role){
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
       return true;
    }
}
return false
}