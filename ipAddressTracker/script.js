text = "https://www.youtube.com/"

console.log(text.match(/(?<=www.)\w+\.\w+/g))
console.log(/(?<=www.)\w+\.\w+/g.test(text))