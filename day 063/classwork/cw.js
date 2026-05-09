//1
let numb = 8
if(numb%2==0){
    console.log("even")
}else{
    console.log("odd")
}
console.log(numb%2==0 ? "even" : "odd")
//2
let numb2 = 0
if (numb2>0){
    console.log("positive")
}else if(numb2<0){
    console.log("negative")
}else{
    console.log("zero")
}
console.log(numb2>0?"positive":numb2<0?"negative": "zero")

//3
let score= 50
if(score>90){
    console.log("perfect")
}
else if(score>70 && score<89){
    console.log("good")
}
else if(score>50&&score<69){
    console.log("averge")
}
else{
    console.log("Fail")
}
console.log(score>90?"perfect":score>70 && score<89?"good":score>50&&score<69?"averge":"Fail")
//4
let password="hello123"
if (password="admin123"){
    console.log("logged in")
}
else ("failed")

console.log(password="admin123"?"logged in":"failed")
//5
age = "50"
if (age<13){
    console.log("child")
}
else if(age>13 && age<19){
    console.log("teen")
}
else if(age>20 && age<59){
    console.log("adult")
}
else{
    console.log("senior")
}
console.log(age<13?"child":age>13&&age<19?"teen":age>20&& age<59?"adult":"senior")
//6
let isLoggedIn = true
let isAdmin = false
if (isLoggedIn==true&& isAdmin==true){
    console.log("welcome admin")
}else if(isLoggedIn==true && isAdmin==false){
    console.log("hello user")
}else{
    console.log("please login")
}
console.log(isLoggedIn==true&& isAdmin==true?"welcome admin":isLoggedIn==true && isAdmin==false?"hello user":"please login")
//7
let a = 30
let b = 40
if (a>b){
    console.log("a is bigger")
}
else if (b>a){
    console.log("b is bigger")
}
else{
    console.log("equal")
}
console.log(a>b?"a is bigger":b>a?"b is bigger":"equal")