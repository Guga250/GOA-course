//16
const school = {
    name: "patricks second school",
    students: 400,
    city: "Tbilisi",
    public: true
}
for (let i in school){
    if(typeof(school[i])=="boolean"){
        console.log(i)
    }
}
//17
const smartphone = {
    brand: "apple",
    model: "13 pro max",
    price: 1599,
    storage: 30
}
for (let i in smartphone){
    if(smartphone[i]>=100){
        console.log(i)
    }
}
//18
const athlete = {
    name:"giorgi",
    age:25,
    sport:"weight lift",
    medals: 2,
    active: true
}
let count = 0
for (let i in athlete){
    if(typeof(athlete[i])=="number"){
        count+=1
    }
}
console.log(count)
//19
const restaurant = {
    name: "bistro",
    cuisine:"Croissant",
    rating:3.9,
    price:7,
    open:false
}
for (let i in restaurant){
    if(restaurant[i]>4){
        console.log(i)
    }
}
//20
const country = {
    name:"finland",
    population: 5600000,
    capital:"Helsinki",
    area:303000
}
for(let i in country){
    console.log(i+" "+ "=" + " " +country[i])
}