//11
const movie = {
    Title: "Echoes Beyond Midnight",
    Genre: "Mystery and Sci-Fi",
    Rating: 8.3/10
}
console.log(Object.keys(movie))
//12
const laptop = {
    brand:"acer",
    ram:16,
    storage:200,
    price:1499
}
console.log(Object.values(laptop))
//13
const country = {
    name:"belgium",
    capital:"brussels",
    population:1700000,
    language:"german"
}
console.log(Object.entries(country))
//14
const product = {
    name:"rice",
    price:6,
    category:"food",
}
for (const [key, value] of Object.entries(product)){
    console.log(key, value)
}
//15
const car1 = {
    color:"red",
    maxSpeed:300,
    canRun:true
}
const car2 = {
    color:"red",
    maxSpeed:200,
    canRun:true
}
console.log(Object.assign(car1, car2))

//16
const student1 = {
    name:"barbare",
    age:13
}
const student2 = {
    name:"nika",
    age:15
}
console.log(Object.assign(student1, student2))

//17
const account = {
    username:"gugaEatsBananas123",
    email:"qweqwe123@gmail.com",
    password_:"BananasEatGuga321",
    active:true
}
console.log((Object.keys(account)).length + "keys")

//18
const car = {
    brand:"bmw",
    model:"f4",
    year:2000,
    color:"black"
}
console.log(Object.values(car))
//19
const addres = {
    city:"tbilisi",
    street:"ivane machabeli"
}
const contact = {
    phone:551104410,
    mail:"contactUs@outlook.com"
}
const both = Object.assign(addres, contact)
console.log(addres, contact)
//20
const player = {
    name:"DragonSlayer",
    level:11,
    score:1100
}
for (const [key, value] of Object.entries(player)){
    console.log(key+ " = "+value)
}
/*

20. შექმენი ობიექტი `player`, რომელსაც ექნება `name`, `level`, `score` და `rank`. `Object.entries()` და `for...of` გამოიყენე და გამოიტანე ყველა ინფორმაცია ფორმატით: `key = value`.
*/