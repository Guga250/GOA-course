/*
22)

შექმენი phone ობიექტი brand, model, price, storage და available property-ებით. შეცვალე price და storage-ის მნიშვნელობები და შემდეგ for...in-ით გამოიტანე ყველა property.

23)

შექმენი player ობიექტი name, team, age, score და active property-ებით. for...in-ის გამოყენებით გამოიტანე მხოლოდ ის key-ები, რომელთა value არის true ან false.

24)

შექმენი restaurant ობიექტი მინიმუმ 5 property-ით. დაამატე isOpen property. შემდეგ წაშალე რომელიმე არსებული property და for...in-ით გამოიტანე ობიექტის ყველა დარჩენილი property.

25)

შექმენი calculator ობიექტი number1 და number2 property-ებით. დაამატე add, subtract და multiply მეთოდები, რომლებიც შესაბამის ოპერაციებს შეასრულებენ და შედეგს დააბრუნებენ.

26)

შექმენი student ობიექტი name, age, math, english, history და active property-ებით. for...in-ის გამოყენებით დაითვალე, რამდენი property-ის value არის number ტიპის.
*/
const phone = {
    brand:"samsung",
    model:"galaxy s26",
    price:2899,
    storage:32,
    avaible:true,
}
phone.price = 2499
phone.storage = 31
for(let i in phone){
    console.log(i)
}