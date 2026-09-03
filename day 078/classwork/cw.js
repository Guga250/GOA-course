/*
4) შექმენი phone ობიექტი brand, model, storage და price property-ებით. for...in-ის გამოყენებით დაბეჭდე ყველა property.

5) შექმენი game ობიექტი name, genre, players და year property-ებით. for...in-ის გამოყენებით გამოიტანე მხოლოდ ის property-ები, რომელთა მნიშვნელობაც string ტიპისაა.
*/
//1
const student = {
    name:"luka",
    age:10,
    grade:5,
    city:"kutaisi"
}
for(let i in student){
    console.log(i+":"+student[i])
}
//2
const car = {
    brand:"bmw",
    model:"f4",
    year:"2013",
    color:"white",

}
for(let i in car){
    console.log(i+" "+car[i])
}
//3
const movie = {
    title:"zombie wars",
    genre:"action",
    year: 2015,
    rating:4.6
}
for(let i in movie){
    console.log(i+"->"+movie[i])
}
//4
const phone = {
    brand:"iphone",
    model:"mini 12",
    storage:200,
    price:1200
}
for(let i in phone){
    console.log(i)
}
//5
const game = {
    name: "war clash 2",
    genre: "action",
    players: 1200,
    year:2023
}
for (let i in game){
    if(typeof(game[i])=="string"){
        console.log(i)
    }
}
//6
const book = {
    title:"princess adventure",
    author:"ali lindgin",
    pages:300,
    year:1970
}
for (let i in book){
    if(typeof(book[i])=="number"){
        console.log(i)
    }
}
//7
const user = {
    username:"qwerty123",
    age:50,
    country:"USA",
    active:true,
}
for (let i in user){
    if(user[i]==true){
        console.log(i)
    }
}
//8
const laptop = {
    brand:"acer",
    model:"1288412cc",
    year:2013,
    haveParts:true,
    canRun:true
}
let total = 0
for (let i in laptop){
    total+=1
}
console.log(total)
//9
const footballer = {
    name:"ronaldo",
    age:41,
    club:"Real Madrid",
    goals: 978
}
for (let i in footballer){
    if(footballer[i]>30){
        console.log(i)
    }
}
//10
const product = {
    name:"big mac",
    brand:"mcdonald's",
    price:1,
    stock:100000000
}
for(let i in product){
    console.log(`The ${i} of key is ${product[i]}.`)
}
//11
const person = {
    name:"beso",
    age:14,
    height:1.65,
    sport:"basketball",
    weight:60
}
for(let i in person){
    if(i.length>5){
        console.log(i)
    }
}
