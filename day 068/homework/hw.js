//11
let country = "georgia"
function print(){
    console.log(country)
}
print() //georgia
//12
function showAge(){
    let age = 14
    console.log(age)
}
showAge() //14
//console.log(age) not defined
//13
if (12 == 12){
    let favoriteColor = "blue"
    console.log(favoriteColor)
}
//console.log(favoriteColor) not defined
//14
function parent(){
    let username= "Nika"
    function child(){
        console.log(username)
    }
    child()
}
parent() //Nika
//15
let school = "GOA"
function info(){
    console.log(`I study at ${school}.`)
}