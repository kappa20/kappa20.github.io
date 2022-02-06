const apiLink = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const word = document.getElementById("word");
const explanation = document.getElementById("explanation")

function search(){
    let url = apiLink + word.value;
    fetch(url)
.then(response => {
	return response.json();
}).
then(json =>{
    explanation.value = json["0"]["meanings"]["0"]["definitions"]["0"]["definition"] ;
    console.log("success");
})
.catch(err => {
    explanation.value = "Word not found"
	console.error(err);
});
}