/*
2) შექმენი სია სადაც იქნება თქვენი ჯგუფელების სახელები და მეორე ინდექსზე მდგომი ელემენტი შეცვლაე "group59" ით
3) შექმენი სია სადაც გექნება სია და ეცადეთ რომ გამოიყენოთ მინუს ინდექსინგი და რა არის შედეგი რატომ არ მუშაობს
4) შექმენი სია და ეცადე რომ გამოიტამო ბოლო ინდექსზე მდგომი ელემენტი გამოიყენეთ .length
5) კომენტარებით ახსენით რას აკეთებს pop და shift მეთოდები და რა განსხვავებაა მათ შორის ასევე მოიყვანეთ მათზე თითო მაგალითი
6) კომენტარებით ახსენით რას აკეთებს push და unshift მეთოდები და რა განსხვავებაა მათ შორის ასევე მოიყვანეთ მათზე თითო მაგალითი
7) indexOf მეთოდზე გააკეთეთ 2 მაგალითი
8) შექმენი სია let names = ['luka', 'nika', 'ana', 'shalva', 'goderzi'] და შემდეგ splice ით ამოჭერით ['nika', 'ana', 'shalva'] ეს ნაწილი
*/

//2
let names = ["anamaria", "andria", "guga", "barbare", "niko"]
names[2] = "group59"
console.log(names)
//3
let fruits = ["apple", "kiwi", "watermelon", "coconut"]
console.log(fruits[-1])//undefined
//ჯავაასკრიპტში მინუს ინდექსები არ არსებობს
//4
let colors = ["red", "green", "blue"]
console.log(colors[colors.length-1])
//5
//pop ელემენტებს შლის ბოლოდან და იმ ელემენტს აბრუნებს
//shift ელემენტს შლის დასაწყიში და იმ ელემენტს აბრუნებს
let numbers = [4, 27, 93, 1, -525325157584934857658494857658439]
console.log(numbers.pop())
console.log(numbers.shift())
//6
//Push სიის ბოლოში ამატებს ელემენტს ან ელემენტებს
//unshift სიის დასაწყიში ამატებს ელემენტს ან ელემენტებს
let animals = ["cow", "horse"]
animals.push("rhino")
animals.unshift("donkey")
//7
//indexOf გადაეცემა ერთი ელემენტი და მის პირველ შეხვედრაში აბრუნებს 
let sports = ["football", "basketball", "tennis", "waterpolo", "tennis"]
sports.indexOf("tennis") //2
let language = ["c++", "python", "javascript", "lua", "css", "html", "c++"]
language.indexOf("c++") //0
//8
let names2 = ['luka', 'nika', 'ana', 'shalva', 'goderzi']
console.log(names2.slice(1,3))