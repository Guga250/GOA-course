//6
const photo = document.getElementById("photo")
const text = document.getElementById("text")
photo.width = "300px"
text.textContent = "This is my photo!"
text.style.color = "blue"

//7
const box = document.getElementsByClassName("box")
for(const i of box){
    box.style.backgroundColor = "green"
    box.style.width = "150px"
    box.style.height = "100px"
    //here
}
//8
const everyButtons = document.getElementsByTagName("button")
for (const button of everyButtons){
    button.style.backgroundColor = "blue"
    button.style.color = "white"
    button.style.padding = "10px"
}
everyButtons[3].textContent = "Done!"
//9
const text = document.querySelector("p")
text.textContent = "I am learning JavaScript!"
text.style.backgroundColor = "yellow"
text.style.color = "black"
