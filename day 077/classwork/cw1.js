/*
1) შექმენით ობიექტი ნებისმიერ ადამიანზე
  -- შექმნის მერე ჩაამატეთ ახალი property eyeColor ი 
  -- წაშალეთ რომელიმე არსებული property

2) შექმენიით ობიექტი ნებისმიერ ცხოველზე
 -- შექმენის მერე წაშალეთ ნებისმიერი property
 -- იგივე property დაამატეთ უკან

3) შექმენით ობიექტი ნებისმიერ მოტოციკლზე
 -- შექმნის მერე არსებული property შეცვალეთ სხვა მნიშვნელობით
 -- წაშალეთ არსებული propery
 -- დაამატეთ ახალი property
  */
//1
const merabDvalisvili = {
    country: "Georgia",
    isStrong: true,
    gender: "Man"
}
merabDvalisvili.eyeColor = "brown"
delete merabDvalisvili.gender
console.log(merabDvalisvili)
//2
const Lion = {
    isAnimal: true,
    isKingOfAnimals: true,
    color: "Gold",
    place: "Savana",
    isWild: true,
    age: 5
}
delete Lion.color
Lion.color = "Gold"
console.log(Lion)
//3
const motobike = {
    color:"red",
    isFast: true,
    engine: "1000",
    canRun:false
}
motobike.color = "black"
delete motobike.engine
motobike.lightsColor = "white"
console.log(motobike)