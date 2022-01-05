let quizResources = [
    {
        question:"what does html stands for ?",
        a:"Hyperlinks and Text Markup Language",
        b:"Home Tool Markup Language",
        c:"Hyper Text Markup Language",
        d:"Something else , not mentioned here",
        correct:'c'
    },
    {
        question:"Who is making the Web standards?",
        a:"Mozilla",
        b:'Microsoft',
        c:'Google',
        d:'The World Wide Web Consortium',
        correct:'d'
    },
    {
        question:'Choose the correct HTML element for the largest heading ?',
        a:'<h6>',
        b:'<h1>',
        c:'<heading>',
        d:'<head>',
        correct:'b'
    },
    {
        question:'What is the correct HTML element for inserting a line break ?',
        a:'<br>',
        b:'<lb>',
        c:'<break>',
        d:'not mentioned here',
        correct:'a'
    },
    {
        question:'What is the correct HTML for adding a background color ?',
        a:`<body bg="yello">`,
        b:`<background> yellow </background>`,
        c: `<body style="background-color:yellow;">`,
        d:'not mentioned here',
        correct:'c'

    },
    {
        question:'What is the most used programming Language in 2021 ?',
        a:'C/C++',
        b:'java',
        c:'JavaScript',
        d:'python',
        correct:'d'
    }
]
var currentQuiz = 0;
var score = 0;
var check = document.createAttribute("checked");
const questionText = document.getElementById("questionText");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
const random = document.getElementById("f");
const submitBtn = document.getElementById("submitBtn");
const quiz = document.getElementById("quiz");
function showQuiz(){
    questionText.innerText = quizResources[currentQuiz].question
    aText.innerText = quizResources[currentQuiz].a;
    bText.innerText = quizResources[currentQuiz].b;
    cText.innerText = quizResources[currentQuiz].c;
    dText.innerText = quizResources[currentQuiz].d;

}
function deselectAnswers(){
    const rasio = document.querySelectorAll("input[name=choice]")
    rasio.forEach((radioElm) =>{
        radioElm.checked = false;
    })
}
submitBtn.addEventListener("click",()=>{
    
   if(document.getElementById(quizResources[currentQuiz].correct).checked){
            score++;
    }
    deselectAnswers();
    
    if(currentQuiz < quizResources.length - 1){
        currentQuiz++;
        showQuiz();
    }else{
        quiz.innerHTML = `<h2>You have ${score} correct answers out of ${quizResources.length}</h2>`    
    }
    
})
window.onload = showQuiz;