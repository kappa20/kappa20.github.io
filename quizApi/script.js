const answerQuestion = document.getElementById("answerQuestion");
const startBtn = document.getElementById("startBtn");
const answersos = document.getElementsByClassName("answer");
const question = document.getElementById("quizQuestion");
const questionCount = document.getElementById("questionCount")
let apiLink = "https://quizapi.io/api/v1/questions?apiKey=FDlwnTlEkujsBD6VnYfSG5bXyQ5fKNIcMjPMJA4q"
let score = 0;
var questionNumber = 0
var count = 0
var arr ;

function start(){
    answerQuestion.style.transform = "scale(1,1)";
    startBtn.style.display = "none";
    fetch(apiLink)
    .then(response => response.json())
    .then(json =>{
        arr = json;
        update(json);
    })
    .catch(() => console.log("We have an Error"))
}
function update(data = arr){
    question.innerHTML = data[questionNumber].question;
        /* answersos[0].innerHTML = json[0].answers[answersos[0].id]; */
        for(let i in answersos){
            answersos[i].innerHTML = data[questionNumber].answers[answersos[i].id];
            /* if(answersos[i].innerText === ''){
                answersos[i].style.display = "none"
            } */
        };
        let userAnswer = event.target.id;
        if(data[questionNumber]["correct_answers"][userAnswer+"_correct"] === "true") {
            score++;
        }
        if(questionNumber === 19){
            questionCount.innerText = null;
            answerQuestion.removeChild(answerQuestion.firstChild)
            question.innerText = `you got ${score*16} points`
        }else{
            questionNumber++; 
            count++;
            questionCount.innerText = count;
        }
        
}


//function to hid answer button with no content 


