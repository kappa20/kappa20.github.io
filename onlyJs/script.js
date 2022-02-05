    const body = document.body;
    const div = document.createElement("div");
    const spanPoids = document.createElement("span");
    const spanCm = document.createElement("span");
    const inputPoids = document.createElement("input");
    const inputCm = document.createElement("input");
    const btnCalcul = document.createElement("button")
    btnCalcul.setAttribute("onclick","calculez()");
    const spanResult = document.createElement("span");
    const inputResult = document.createElement("input");
    const br = document.createElement("br");
    const spanAvis = document.createElement("span");
    const textarea = document.createElement("textarea");
function render(){
    /* style the div background  */
    div.style.backgroundColor = "#b3efad"
    /* style the div  */
    /* style textares */
    textarea.style.minWidth = "50%"
    textarea.style.minHeight = "100px"
    textarea.style.resize = "none"
    textarea.style.fontSize = "25px"
    inputResult.setAttribute("type","number");
    spanResult.innerHTML = "<br\>Votre indice de Masse Corporelle (IMC) est : "
    btnCalcul.innerText = "Calculez";
    inputPoids.setAttribute("type","number");
    inputCm.setAttribute("type","number");
    spanPoids.innerHTML = "Poids (en Kg)";
    spanCm.innerText = "Taille (en cm)";
    spanAvis.innerHTML = "<br\>Avis de notre expert :<br\>"
    body.appendChild(div)
    div.appendChild(spanPoids)
    spanPoids.after(inputPoids)
    inputPoids.after(br)
    br.after(spanCm)
    spanCm.after(inputCm)
    inputCm.after(btnCalcul)
    btnCalcul.insertAdjacentElement("afterend",spanResult);
    spanResult.after(inputResult)
    inputResult.after(spanAvis)
    spanAvis.after(textarea)
}
function calculez(){
    let poids = Number(inputPoids.value);
    let hauteur = Number(inputCm.value)/100;
    let calc = (poids/(Math.pow(hauteur,2))).toFixed(2);
    inputResult.value = calc
    inputResult.setAttribute("disabled","")
    if(calc < 16.5){
        textarea.value = "Dénutrition";
        return;
    }
    else if(calc < 18.5){
        textarea.value = "Maigreur";
        return
    }
    else if(calc < 25){
        textarea.value = "Corpulence normale ";
        return
    }
    else if(calc < 30){
        textarea.value = "Surpoids ";
        return
    }
    else if(calc < 35){
        textarea.value = "Obésité modérée ";
        return
    }else{
        textarea.value = "Obésité morbide ou massive "
    }
}
render();
