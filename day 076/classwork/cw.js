/*
1. ყველა რიცხვის ჯამი
const numbers = [5, 10, 15, 20]
// შედეგი უნდა იყოს 50

2. ყველა რიცხვის ნამრავლი
const numbers = [2, 3, 4]
// შედეგი უნდა იყოს 24

3. ყველა რიცხვის სხვაობა
const numbers = [2, 3, 4]
// შედეგი უნდა იყოს -5

4. ყველაზე დიდი რიცხვის პოვნა
const numbers = [12, 8, 55, 31, 19]
// შედეგი უნდა იყოს 55

5. ყველაზე პატარა რიცხვის პოვნა
const numbers = [12, 8, 55, 31, 19]
// შედეგი უნდა იყოს 8

6. ყველა ელემენტის სიგრძის ჯამი
const words = ["cat", "house", "js"];
// შედეგი უნდა იყოს 10
// (3 + 5 + 2)*/
//1
const numbers = [5, 10, 15, 20]
const numbersSum = numbers.reduce((a, b) =>{
    return a+b
})
console.log(numbersSum)
//2
const numbers2 = [2, 3, 4]
const numbersMultiply = numbers2.reduce((a,b) =>{
    return a*b
})
console.log(numbersMultiply)
//3
const numbers3 = [2, 3, 4]
const numbersMinus = numbers3.reduce((a,b) =>{
    return a-b
})
console.log(numbersMinus)
//4
const numbers4 = [12, 8, 55, 31, 19]
const biggestFromNumbers4 = numbers4.reduce((a, b) => {
    b>a
})
console.log(biggestFromNumbers4)
//5
const numbers44 = [12, 8, 55, 31, 19]
const smallest = numbers44.reduce((min, num) => min<num ? min :num)
console.log(smallest)
//6
const words = ["cat", "house", "js"]
const wordsSum = words.reduce((a,b) =>{
    return a.length+b.length
})
console.log(wordsSum)