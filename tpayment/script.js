const fullName = document.getElementById("fullName");
const Adresse = document.getElementById("Adresse");
const telNbr = document.getElementById("telNbr");
const paypal = document.getElementById("paypal");
const carte = document.getElementById("carte");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");

const typeCarte = document.getElementById("typeCarte");
const numeroCarte = document.getElementById("numeroCarte");
const mois = document.getElementById("mois");
const annee = document.getElementById("annee");
const code = document.getElementById("code");
const error = document.getElementById("error");
const tablePaypal = document.getElementById("tablePaypal");
const tableCarte = document.getElementById("tableCarte");


function showCarte(){
    
     if(carte.checked == true){
         tablePaypal.style.display = "none";
         tableCarte.style.display = "block";
     }
 }
 function showPaypal(){
    
     if(paypal.checked == true){
        tablePaypal.style.display = "block";
        tableCarte.style.display = "none";
     }
 }

 function checkPaypal(){
     var wrongInput = false;
     let errorText = "";
     
     if(fullName.value  === ""      ||
        Adresse.value   === ""      ||
        telNbr.value    === ""      ||
        email.value     === ""      ||
        pwd.value       === ""       

    ){
            wrongInput = true;
            errorText +="Empty Fields\n";
     }
     else if(!/^[a-zA-Z]+\s+[a-zA-Z]+$/.test(fullName.value)){
        wrongInput = true;
        errorText +="Nom Incorrecte\n";
     }
     else if(!/^[\w\s]+$/i.test(Adresse.value)){
        wrongInput = true;
        Adresse.style.border = "red";
        errorText +="l'addresse doit contenir que des lettres et des chiffres\n";
     }
     else if(!/^0[567]\d{8}$/i.test(telNbr.value)){
        wrongInput = true;
        errorText +="Numero Incorrete\n";
     }
     else if(!/^[\w\-\.]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(email.value)){
        wrongInput = true;
        errorText +="Email Incorrete\n";
     }

     /* Check of any wrong inputs are present in the form */
     if(wrongInput === true){
        error.style.color = "red";
     }
     else{
        errorText +="Valid Input"
         error.style.color = "green";
     }
     error.innerText = errorText;
     error.style.transform = "scale(1,1)";
    
 }
 function checkCarte(){
    var wrongInput = false;
    let errorText = "";
    
    if(fullName.value       === ""      ||
       Adresse.value        === ""      ||
       telNbr.value         === ""      ||
       
       numeroCarte.value    === ""      ||
       mois.value           === ""      ||
       annee.value          === ""      ||
       code.value           === ""        
   ){
           wrongInput = true;
           errorText +="Empty Fields\n";
    }
    else if(!/^[a-zA-Z]+\s+[a-zA-Z]+$/.test(fullName.value)){
        wrongInput = true;
        errorText +="Nom Incorrecte\n";
     }
     else if(!/^[\w\s]+$/i.test(Adresse.value)){
        wrongInput = true;
        Adresse.style.border = "red";
        errorText +="l'addresse doit contenir que des lettres et des chiffres\n";
     }
     else if(!/^0[567]\d{8}$/i.test(telNbr.value)){
        wrongInput = true;
        errorText +="Numero Incorrete\n";
     }
     else if(typeCarte.value === "Null"){
        wrongInput = true;
        errorText +="Type de carte Non selectionné\n";
     }
     else if(!/^\d{16}$/.test(numeroCarte.value)){
        wrongInput = true;
        errorText +="Numero de la carte doit avoir 16 chiffres\n";
     }
     else if(Number(mois.value) < 1 || Number(mois.value) > 12 ){
        wrongInput = true;
        errorText +="mois  entre 1 et 12\n";
     }
     else if(new Date(Number(annee.value),Number(mois.value)) < new Date()){
        wrongInput = true;
        errorText +="Carte Expiré\n";
     }
     else if(!/^\d{3}$/.test(code.value)){
        wrongInput = true;
        errorText +="code doit avoir 3 chiffres\n";
     }  




    /* Check of any wrong inputs are present in the form */
    if(wrongInput === true){
       error.style.color = "red";
    }
    else{
       errorText +="Valid Input"
        error.style.color = "green";
    }
    error.innerText = errorText;
    error.style.transform = "scale(1,1)";
     return 0;
 }
 function removeError(){
   
    error.style.transform = "scale(1,0)";
    setTimeout(function(){
        error.innerText = "";
    },500)
 }
carte.addEventListener('click',showCarte);
paypal.addEventListener('click',showPaypal);