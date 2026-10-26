//1
const heading1 = document.getElementById("heading")
heading1.textContent = "Hello, JavaScript!"
heading1.style.backgroundColor = "yellow"
heading1.style.color = "black"
//2
const pars = document.getElementsByClassName("par")
for(i of pars){
    i.textContent = "I love JavaScript"
    i.style.backgroundColor = "lightBlue"
}
pars[0].style.color = "red"

//3
const buttons = document.getElementsByClassName("but")
for(i of buttons){
    i.style.backgroundColor = "black"
    i.style.color = "white"
}
buttons[2].textContent = "Clicked!"

//4
const heading2 = document.querySelector("h2")
heading2.textContent = "First Heading"
heading2.style.backgroundColor = "purple"
heading2.style.color = "white"

//5
const heading12 = getElementById("main-title")
const button12 = getElementById("btn")
const paragraph = getElementById("description")
heading12.textContent = "My Website"
paragraph.textContent = "Welcome to my website!"
button12.style.backgroundColor = "green"
button12.style.color = "white"
