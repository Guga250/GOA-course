const movie = {
    title:"shrek",
    director:"andrew adamson",
    rating:4.5,
    year:2001,
    duration:120
}
for(let i in movie){
    if(typeof(movie[i])=="string"){
        console.log(i)
    }
}
//13
const car = {
    running:true,
    speedMax:200,
    seats:2,
    brand:"lamborgini"
}
car.color = "red"
car.seats = 2
//14
const student = {
    name:"giorgi",
    age:10,
    grade:5,
    active:false,
    country:"georgia"
}
let total = 0
for(let i in student){
    if(typeof(student[i])=="string"){
        total++
    }
}
console.log(total)
//15
const phone = {
    color:"gray",
    brand:"apple",
    model:"13pro",
    canTurnOn:false,
    battery:50
}
delete phone.brand
for(let i in phone){
    console.log(i)
}
//16
const bankAccount = {
    owner:"guga",
    balance:1230,
    currency:"USD",
    deposit:function(a){
        return bankAccount.balance + a
    }
}
console.log(bankAccount.deposit(2000))
//17
const game = {
    name:"zombie hunter",
    genre:"action",
    players:20004,
    Price:0,
    online:true
}
for(let i in game){
    if(typeof(game[i])=="number"&&game[i]>10){
        console.log(i)
    }
}
//18
const animal = {
    name:"polar bear",
    color:"white",
    age:20,
    home:"antarctida",
    food:"salmon",
    speak:function(){
        console.log("The animal makes a sound")
    }
}
animal.speak
//19
const employee = {
    name:"gary",
    position:"waiter",
    salary:700,
    age:25,
    remote:false
}
for(let i in employee){
    console.log(`${i} -> ${employee[i]}`)
}
//20
const website = {
    developers:3,
    supportsEveryBrowser:true,
    age:20,
    updates:true,
    url:"cats.com"
}
website.visits = 1000000
website.addvisit = function(){
    return website.visits++
}
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
website.addvisit()
console.log(website.visits)
//21
const book = {
    title:"horse life",
    author:"adam horse",
    pages:34,
    price:17,
    avaible:true
}
let total1 = 0
for(let i in book){
    total1++
    
}
console.log(total1)
for(let i in book){
    if(i.length>5){
        console.log(i)
    }
}

