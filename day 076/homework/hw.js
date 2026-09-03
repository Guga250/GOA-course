//1
const words = ["I", "love", "JavaScript"];
const sentence = words.reduce((text, currentWord)=>
{return text+" "+currentWord})
//2
const numbers = [5, -2, 10, -8, 3, -1];
const sum = numbers.reduce((sum,num)=>{
    if(num<0){
        return sum+num
    }
    else{
        return sum
    }
})
//3
const users = [
    { name: "Nika", age: 20 },
    { name: "Luka", age: 18 },
    { name: "Ana", age: 22 }
];
const userAgeSum = users.reduce((sum, user)=>{
    return sum+user.age
},0) 
//4
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
const fruitsCount = fruits.reduce((count, word)=>{
    if(count[word]){
        count[word]++
    }
    else{
        count[word] = 1
    }

    return count

}, {})