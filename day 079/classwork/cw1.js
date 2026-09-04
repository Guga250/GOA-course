//22
const phone = {
    brand:"apple",
    model:"12 mini",
    price:799,
    storage:100,
    avaible:false
}
phone.price = 1000
phone.storage = 60
for(let i in phone){
    console.log(i)
}
//23
const player ={
    name:"potateKing",
    team:"red",
    age:15,
    score:23,
    active:true
}
for(let i in player){
    if(typeof(player[i])=="boolean"){
        console.log(i)
    }
}
//24
const restaurant = {
    name:"italiano",
    location:"USA",
    rating:4.8,
    cuisine:"pizza",
    employees:10
}
restaurant.isOpen = true
delete restaurant.location
for(let i in restaurant){
    console.log(i)
}
//25
const calculator = {
    number1:10,
    number2:5,
    subtract:function(){
        return calculator.number1-calculator.number2
    },
    multiply:function(){
        return calculator.number1*calculator.number2
    }
}
//26
const student = {
    name:"nika",
    age:15,
    math:10,
    english:8,
    history:9,
    active:true
}
let total = 0
for (let i in student){
    if(typeof(student[i])=="number"){
        console.log(i)
    }
}
//27
const car = {
    brand:"mercedes",
    model:"a5",
    year:"1997",
    fuel:23,
    speed:80,
    accelerate:function(){
        return car.speed+10
    }
}
accelerate()
accelerate()
accelerate()
console.log(car.speed)
/*

27)

შექმენი car ობიექტი brand, model, year, speed და fuel property-ებით. დაამატე accelerate მეთოდი, რომელიც speed-ს 10-ით გაზრდის ყოველ გამოძახებაზე. გამოიძახე მეთოდი 3-ჯერ.
*/