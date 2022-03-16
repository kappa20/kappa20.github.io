var scoreNumber = document.getElementById("scoreNumber");
var closeIcon = document.getElementById("closeIcon");
var rulesAlert = document.getElementById("rulesAlert");
var rulesBtn = document.getElementById("rulesBtn");
var picksContainer = document.getElementById("picksContainer")
var picks = document.querySelectorAll(".small");

var round = document.getElementById("round")
var again =document.getElementById("again")
var againBtn = document.querySelector("#again>button");
var userPick = document.querySelector(".USER")
var pickImg = document.querySelector("#round>div>div>div>img")
var aiPick=  document.querySelector(".AI")
var randomList = [["Rock","./images/icon-rock.svg"],
["Paper","./images/icon-paper.svg" ]
,["Scissors","./images/icon-scissors.svg"],
["Spock","./images/icon-spock.svg"],
["Lizard","./images/icon-lizard.svg"]]
var score = 12
var aiImg = document.getElementById("aiImg");
var gameResult = document.getElementById("gameResult")
picks.forEach(element => {
    element.addEventListener("click",function(){
        
        userPick.id = this.id;
        pickImg.src = this.title;
        picksContainer.style.display ="none";
        round.style.display = "flex";
        again.style.display ="grid";
        again.style.visibility ="hidden";
        againBtn.disabled = true;
        setTimeout(function(){
            var nbr = Math.floor(Math.random()*5)
            
            aiPick.id = randomList[nbr][0];
            aiImg.setAttribute("src",randomList[nbr][1]);
            
            aiPick.classList.remove("noeffect");
            aiPick.classList.remove("hideImg");
            aiPick.classList.add("effect");
            
            again.style.visibility ="visible";
            againBtn.disabled = false;
            
            

        },500)
        /* Check Who wins the round  */
        setTimeout(function(){
            if(userWin(userPick.getAttribute("id"),aiPick.getAttribute("id")) === true){
                gameResult.innerText = "YOU WIN";
                score++;
                scoreNumber.innerText = `${score}`
            }
            else if(userWin(userPick.getAttribute("id"),aiPick.getAttribute("id")) === "draw"){
                gameResult.innerText = "DRAW";
            }
            else{
                gameResult.innerText = "YOU LOST";
                score--;
                scoreNumber.innerText = `${score}`
            }
        },500)

        
    })
});

rulesBtn.addEventListener("click",function(){
    rulesAlert.classList.remove("hideRules");
}
)
closeIcon.addEventListener("click",function(){
    rulesAlert.classList.add("hideRules");
})

againBtn.addEventListener("click",function(){
        picksContainer.style.display ="block";
        aiPick.classList.add("noeffect");
        aiPick.classList.add("hideImg");
        aiPick.classList.remove("effect");
        aiPick.id = `nothing`;
        round.style.display = "none";
        again.style.display ="none";
})

function userWin(userId,aiId){
    if(userId === "Scissors" && (aiId ==="Paper" || aiId ==="Lizard")){
        console.log(true);
        return true;
    }
    else if(userId === "Rock" && (aiId ==="Lizard" || aiId ==="Scissors")){
        console.log(true);
        return true;
    }
    else if(userId === "Paper" && (aiId ==="Rock" || aiId==="Spock")){
        console.log(true);
        return true;
    }
    else if(userId ==="Spock" && (aiId ==="Scissors" || aiId==="Rock")){
        console.log(true);
        return true;
    }
    else if(userId ==="Lizard" && (aiId ==="Spock" || aiId ==="Paper")){
        console.log(true);
        return true;
    }
    else if(userId === aiId){
        return "draw";
    }
    else{
        return false;
    }
    
}
