
//1
let websiteName= "GOA"
function printWebsite(){
    console.log(websiteName)
}
printWebsite()
//2
let age = 15
if (age<18){
    console.log("არასრულწლოვანი")
}
//3
//let test = "hhi"
//if (test){
//    let city = "Tbilisi"
//}
//console.log(city) //error
//4
let nam = "Nika"
function def(){
    console.log(nam)
}
def()

// 5

function greet(){
    let username = "Giorgi"
    return username
}
console.log(greet())
//6
{let score=100
    console.log(score)
}
//console.log(score)

// 7
{
    var test = "hello"
}
console.log(test)
//8
function parent(){
    let message = "hello JS"
    function child(){
        console.log(message)
    }
}
console.log(parent())
//9
function outer(){
    let number = 50
    inner();{
        return number
    }
}
console.log(inner)
//10
let language = "JavaScript"
function sen(){
    return `I am learning ${language}`
}