  /* Elements Definition */
  var cArr ={
    asia:[],
    africa:[],
    america:[],
    europe:[],
    oceania:[]
}
var curSCard =[]
var currentMode = "light"
var currentRegion = "Africa"

var modeIcon = document.getElementById("modeIcon");
var modeText = document.getElementById("modeText");
var filter = document.getElementById("filter")
var mybody = document.body;    
var dropdownIcon = document.getElementById("dropdownIcon")
var fiterDropDown = document.getElementById("fiterDropDown")
var bigContainer = document.getElementById("countriesContainer")
var searchInput = document.getElementById("searchInput")
var searchIcon = document.querySelector("#search>i");
var bigContainerChild = document.querySelectorAll("main")
var filterText = document.getElementById("filterText")
var header= document.querySelector("header")
var searchFilter = document.querySelectorAll("#searchFilter > div")
var cards = document.querySelectorAll(".cards")

var borderBtns = document.querySelectorAll(".borderBtn")
var backBtn = document.querySelector(".backBtn")

var oneCountry = document.getElementById("oneCountryDeatils")
/* var filterDrop =document.querySelectorAll(".filterDrop") */
/* function to add one card to the big container  */
function getResearchCard(name){
    getCardByName(name).
    then((res) =>{
        bigContainer.innerHTML = renderOneCard(res.flagUrl,res.countryName,res.population,res.region,res.capital,currentMode)
        
    }).catch(err => alert("Invalid Country Name"))
}
searchIcon.addEventListener("click",function(){
    getResearchCard(searchInput.value)
})
searchInput.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        getResearchCard(this.value)
    }
    
})
        /* var name = event.key;
        var code = event.code;
           
    alert(`Key pressed ${name} \r\n Key code value: ${code}`); */

dropdownIcon.addEventListener("click",dropDownToggle)
function dropDownToggle(){
    if(dropdownIcon.classList.contains("goUpIcon")){
            dropdownIcon.classList.add("goDownIcon")
            dropdownIcon.classList.remove("goUpIcon")
            fiterDropDown.style.display="block";
        }
        else if(dropdownIcon.classList.contains("goDownIcon")){
            dropdownIcon.classList.remove("goDownIcon")
            dropdownIcon.classList.add("goUpIcon")
            fiterDropDown.style.display="none";
        }
}

/* Toggle Dark Mode */

modeIcon.addEventListener("click",modeToggle);
modeText.addEventListener("click",modeToggle);


function goHome(){
    show(document.getElementById("searchFilter"))
    bigContainer.style.display="grid"
    oneCountry.style.display = "none"
}
/*  window.onload=function(){
    dropdownIcon.classList.add("goDownIcon")
} */
/*Toggle Color Mode By TOggling Classes */

function renderOneCard(flagUrl,countryName,population,region,capital,mode){
    population = formatPopulation(population)
    if(mode.toLowerCase() === "light"){
        var oneCountry = `<main class="cardibi shadowWhite cardsWhite" onclick="renderBigCardDetails('${countryName}')">
    <div class="imgContainer">
        <img src="${flagUrl}" alt="${countryName}" loading="lazy" style="width:100%;height: auto;">
    </div>
    <article class="countryInfo" class="shadowWhite cardsWhite">
        <h3 class="countryTitle">${countryName}</h3>
        <p class="Population"><b>Population: </b>${population}</p>
        <p class="Region"><b>Region: </b>${region}</p>
        <p class="Capital"><b>Capital: </b>${capital}</p>
    </article>
</main>`
    return oneCountry
    }
    if(mode.toLowerCase() === "dark"){
        var oneCountry = `<main class="cardibi shadowDark cardsDark" onclick="renderBigCardDetails('${countryName}')">
    <div class="imgContainer">
        <img src="${flagUrl}" alt="${countryName}" loading="lazy" style="width:100%;height: auto;">
    </div>
    <article class="countryInfo" class="shadowWhite cardsWhite">
        <h3 class="countryTitle">${countryName}</h3>
        <p class="Population"><b>Population: </b>${population}</p>
        <p class="Region"><b>Region: </b>${region}</p>
        <p class="Capital"><b>Capital: </b>${capital}</p>
    </article>
</main>`
    return oneCountry
    }
    
    

}
/* function renderDefaultCards(number){

} */
async function getCardByName(countryName){
    var response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    var data = await response.json();
    var data2 = data[0]
    curSCard[0] = {
        flagUrl:data2["flags"].png,
        countryName:data2.name.common,
        population:data2.population,
        region:data2.region,
        capital:data2["capital"][0]

    }
    return curSCard[0]
    
}
async function getRegionCards(region){
    var result = [];
    var response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    var data = await response.json();
    console.log(region)
    console.log(data)
    for(var i = 0 ; i < data.length ; i++){
        result.push({
            "flagUrl":data[i]["flags"].png,
            "countryName":data[i].name.common,
            "population":data[i].population,
            "region":data[i].region,
            "capital":data[i].capital

        })
    }
    
    cArr[`${region}`] = result
    console.log(cArr[`${region}`])
    return result
}

function renderCardByRegion(region,mode){
  var reg = region.toLowerCase()
  var display =""
  if(cArr[reg].length === 0){
    getRegionCards(reg).
    then((res)=>{
        for(var i = 0 ; i < res.length ; i++){
            display += renderOneCard(res[i]["flagUrl"],res[i]["countryName"],res[i]["population"],res[i]["region"],res[i]["capital"],mode)
        }
        return display
    }).
    then(card => bigContainer.innerHTML=card).
    catch(err => console.error(err))
  }
  else{
    for(var i = 0 ; i < cArr[reg].length ; i++){
            display += renderOneCard(cArr[reg][i]["flagUrl"],cArr[reg][i]["countryName"],cArr[reg][i]["population"],cArr[reg][i]["region"],cArr[reg][i]["capital"],mode)
        }
        bigContainer.innerHTML=display
  }
  
    
}
function resetCountries(){
bigContainer.innerHTML = ""
}
function countriesByRegion(){
    curSCard = []
    dropDownToggle()
  var region = event.target.innerHTML
  currentRegion = region
  filterText.innerText = region
    renderCardByRegion(currentRegion,currentMode)

}

function switchMode(element){
    element.classList.toggle("cardsWhite")
   element.classList.toggle("shadowWhite")
   element.classList.toggle("cardsDark")
   element.classList.toggle("shadowDark")
}
function formatPopulation(population){  
  var strpopulation = `${population}`  
  var lista = strpopulation.split("").reverse()
  var result = []
  for(var i = 0 ; i < lista.length ; i++){
    result.push(`${lista[i]}`)
    if((i+1) % 3 === 0 && i!= lista.length -1){
        result.push(",")
    }
  }
  return result.reverse().join("")
}

function modeToggle(){
  if(currentMode === "light"){
      currentMode = "dark" 
  }else{
        currentMode = "light"
  }
  
  
    modeIcon.classList.toggle("bi-moon-fill");
    modeIcon.classList.toggle("bi-moon");
    mybody.classList.toggle("lightMode")
    mybody.classList.toggle("darkMode")
    switchMode(header)
    searchFilter.forEach(element =>{
        switchMode(element)
    })
    /* cards.forEach(element =>{
        switchMode(element)

    }) */
    var cards = document.querySelectorAll(".cardibi")
    for(var i = 0; i < cards.length ;i++){
        switchMode(cards[i])
    }
    
    switchMode(fiterDropDown)
    switchMode(backBtn)
    
}
async function getCardDetails(name){
    var response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    var data  = await response.json()
    var data2 = data[0]
    var borderCountries = data2.borders
    var languages = Object.values(data2.languages) 
    console.log(borderCountries)
    return{
        common:data2.name.common,
        flagUrl:data2["flags"].png,
        nativeName:data2.name.nativeName[`${(Object.keys(data2.name.nativeName)[0])}`].official,
        population:formatPopulation(data2.population),
        capital:data2.capital[0],
        region:data2.region,
        tld:data2.tld[0],
        currencies:Object.keys(data2.currencies)[0],
        subregion:data2.subregion,
        languages:languages,
        border:borderCountries
    }
}
function hide(element){
    element.style.display ="none"
}
function show(element){
    element.style.display='initial'
}


function renderBigCardDetails(name){
    hide(document.getElementById("searchFilter"))
    hide(bigContainer)
    show(oneCountry)
    getCardDetails(name).
    then(result =>{
        var text =""
        for(var i = 0; i< result.languages.length ; i++){
            if(i == result.languages.length -1){
                text += `${result.languages[i]}`
                break
            }
            text += `${result.languages[i]}, `
        }
       document.getElementById("tox").innerHTML=`<img src="${result.flagUrl}" alt="flag">
       <div class="info">
           <h1>${result.common}</h1>
           <div class="left">
               
               <p><b>Native Name : </b>${result.nativeName}</p>
               <p><b>Population : </b>${result.population}</p>
               <p><b>region : </b>${result.region}</p>
               <p><b>Sub Region : </b>${result.subregion}</p>
               <p><b>Brazil : </b>${result.capital}</p>
           </div>
           <div class="right">
               <p><b>Top Level Domain : </b>${result.tld}</p>
               <p><b>Currencies: </b>${result.currencies}</p>
               
               <p><b>Languages : </b>${text}</p>
           </div>
           <div class="bord">
           
           </div>
           
       </div>`
      document.querySelector(".bord").innerHTML = "<h4>Border Countries:</h4>"
       for(var i =0 ; i <result.border.length ; i++){
           getName(result.border[i]).
           then(name => {
            document.querySelector(".bord").innerHTML += `<button onclick="renderBigCardDetails('${name}')" class="borderBtn cardsWhite shadowWhite">${name}</button>`
           }).catch(err => console.error(err))
       }
       
     
    }).catch(err => console.error(err))

    
}
/*  document.querySelector(".bord")+=`<button class="borderBtn cardsWhite shadowWhite">${}</button>` */
 /*  document.querySelector(".bord").innerHTML = texto
        console.log(result.border) */
async function getName(abr){
    var response = await fetch(`https://restcountries.com/v3.1/name/${abr}`)
    var data  = await response.json()
    console.log(data)
   
    return data[0].name.common
}

/* window.onload =renderBigCardDetails("Morocco") */
window.onload = renderCardByRegion("Africa","light")
{/* <h4>Border Countries:</h4>
               <button class="borderBtn cardsWhite shadowWhite">France</button>
               <button class="borderBtn cardsWhite shadowWhite">Germany</button>
               <button class="borderBtn cardsWhite shadowWhite">Netherlands</button> */}