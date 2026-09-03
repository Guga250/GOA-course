/*a
17. მოცემულია სახელების მასივი. `map()`-ის გამოყენებით თითოეულ სახელს ბოლოში დაუმატე `"!"`.
18. მოცემულია რიცხვების მასივი. `filter()`-ის გამოყენებით დატოვე მხოლოდ უარყოფითი რიცხვები.
19. მოცემულია რიცხვების მასივი. `filter()`-ის გამოყენებით დატოვე მხოლოდ ის რიცხვები, რომლებიც `5`-ზე უნაშთოდ იყოფა.
20. მოცემულია სტრინგების მასივი. `filter()`-ის გამოყენებით დატოვე მხოლოდ ის სიტყვები, რომლებიც იწყება ასო `"A"`-ზე.
21. მოცემულია რიცხვების მასივი. `find()`-ის გამოყენებით იპოვე პირველი უარყოფითი რიცხვი.
22. მოცემულია სტრინგების მასივი. `find()`-ის გამოყენებით იპოვე პირველი სიტყვა, რომლის სიგრძე 6 სიმბოლოზე მეტია.
23. მოცემულია ობიექტების მასივი (`name`, `score`). `find()`-ის გამოყენებით იპოვე პირველი სტუდენტი, რომლის `score` არის `100`.
24. მოცემულია რიცხვების მასივი. `findIndex()`-ის გამოყენებით იპოვე პირველი რიცხვის ინდექსი, რომელიც `50`-ზე მეტია.
25. მოცემულია ობიექტების მასივი (`name`, `price`). `findIndex()`-ის გამოყენებით იპოვე პირველი პროდუქტის ინდექსი, რომლის `price` ნაკლებია `20`-ზე.*/
//16
let nums = [2,4,8,16,32,64]
let nums2 = nums.map(num => num/2)
//17
let names = ["guga", "gio", "zura", "luka", "nika"]
let names2 = names.map(name => name + "!")
//18
let grades = [10, 25, 50, -4, -999, 1000];
grades = grades.filter(score => score<0)
//19
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
numbers = numbers.filter(num => num%2==0)
//20
let words = ["Apple", "Cheese", "Air", "Car", "Snake", "Cow", "TV"]
words = words.filter(word => word[0]=="A")
//21
let numbs = [-1, 4, -987, 12312, 111, 101]
console.log(numbs.find(num => num<0))
//22
let strings = ["Dinosaur", "Car", "Human", "Banana", "Country"]
console.log(strings.find(word => word.length > 6))
//23
let students = [
    {name:"guga", score: 89},
    {name:"guga2", score:100}
]
console.log(students.find(student => student.score == 100))
//24
let lastNumbers = [-3, 23, 50, -9, 112, -501, 1, 176]
console.log(lastNumbers.findIndex(a => a>50))
//25
let products = [
    {name:"Rice", price:100},
    {name:"Flour", price:99},
    {name:"Sugar", price:18},
    {name:"Melon", price:22}
]
console.log(products.findIndex(product => product.price<20))