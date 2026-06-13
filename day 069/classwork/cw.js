//pop სიაში ბოლო ელემენტს აშორებს.
let fruits = ["apple", "peach", "orange"]
fruits.pop() 
console.log(fruits)

let dishes = ["pasta", "burger", "taco"]
dishes.pop()
console.log(dishes) 
//push სიის ბოლოში ამატებს ელემენტს.
let cars = ["mercedes", "bmw", "toyota"]
cars.push("lamborgini")
console.log(cars)

let footballers = ["messi", "ronaldo", "neymar"]
footballers.push("kvaratxselia")
console.log(footballers)
//lenght გვაჩვენებს რამდენი ელემენტი არის სიაში.
let tools = ["hammer", "fork", "scissors",]
tools.length
console.log(tools)

let students = ["ana", "guga", "luka", "giorgi"]
students.length
console.log(students)
//shift აშორებს ელემენტს რომელიც დგას 0-ე ინდექსზე სიაში.
let numbers = [1, 5, 10, 2]
numbers.shift()
console.log(numbers)

let area = [1, 25, 100, 4]
numbers.shift()
console.log(area)
//unshift ამატებს ელემენტს სიის დასაწყიში
let moreNumbers = [1, 5, ,7 , 6]
moreNumbers.unshift(0)
console.log(moreNumbers)

let randomNumbers = [5, 6, 7, 8, 9]
randomNumbers.unshift(0)
//slice გადაეცემა 2 არგუმენტი ეს 2 არგუმენტი გვიჩვენებს საიდან სადამდე უნდა ამოვაგდოთ ელემენტები ლისტიდან.
let words = ["car", "cloud", "window", "building"]
words.slice(0,2)
console.log(words)

let buildings = ["restaurant", "museum", "shop", "school", "college"]
buildings.slice(2,4)
console.log(buildings)
//indexOf გადაეცემა 1 არგუმენტი და გვიჩვენებს მერამდენე ინდექსე დგას ჩვენი გადაცემული არგუმენტიდან.
let a = ["a", "b", "c"]
a.indexOf("b") //1
let boo = [true, false,]
boo.indexOf(true) //0