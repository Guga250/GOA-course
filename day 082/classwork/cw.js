//1
const car = {
    model:"mercedes",
    color:"white",
    canRun:true,
    distance:500
}
console.log(Object.keys(car))

//2
const student = {
    name:"Guga",
    age:13,
    grade:100,
    school:"97 public school"
}
console.log(Object.keys(student))

//3
const book= {
    title:"diary of wimpy kid",
    author:"Jeff kinney",
    pages:300,
}
console.log(Object.entries(book))

//4
const user = {
    name:"gugaRidesBike12",
    age:13,
    status:"online"
}
console.log(Object.entries(user))

//5
const person1 = {
    name:"gary",
    employed:true,
    age:30
}
const person2 = {
    name:"mary",
    employed:true,
    age:26
}
console.log(Object.assign(person1, person2))
//6
const personsname1 = {
    name:"greg"
}
const personsname2 = {
    name:"chris"
}

//7
const phone ={
    brand:"iphone",
    model:"12 pro",
    price:1000,
    color:"red"
}
const { brand, model, price, color } = phone
console.log(brand)
console.log(model)
console.log(price)
console.log(color)

//8
const game = {
    name:"among us",
    isPopular:true,
    year:2017
}
for (const [a, b] of (Object.entries(game)))  {
    console.log(`${a}: ${b}`)
}

//9
const userinfo = {
    username:"admin1248120741",
    password:"qwerty123"
}
const userStatus = {
    online:true,
    year:2023
}
console.log(Object.assign(userStatus,userinfo))
//10
const user1 ={
    name:"guga"
}
const user2 = {
    name:"agug"
}
console.log(Object.assign(user2, user1)) /* ბოლო */
