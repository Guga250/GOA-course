//1
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const container = document.getElementById("container")

btn1.addEventListener("click", ()=>{
    container.style.backgroundColor = "blue"
})
btn2.addEventListener("click", ()=>{
    container.style.backgroundColor = "black"
})

//2
const btn12 = document.getElementById("btn12")
const btn22 = document.getElementById("btn22")
const text = document.getElementById("p")
btn12.addEventListener("click", ()=>{
    text.style.color = "red"
})
btn22.addEventListener("click", ()=>{
    text.style.color = "green"
})

//3
const btn13 = document.getElementById("btn13")
const btn23 = document.getElementById("btn23")
const h1 = document.getElementById("h1")
btn13.addEventListener("click", ()=>{
    h1.textContent = "Hello, JavaScript!"
})
btn23.addEventListener("click", ()=>{
    h1.textContent = "Welcome!"
})
