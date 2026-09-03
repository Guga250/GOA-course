//1
function mimateba(a,b){
    return a+b
}
console.log(mimateba(3,5))
//2
function even(a){
    if (a%2==0){
        return "number is even"
    }
    else {
        return "number is odd"
    }
}
console.log(even(6))
//3
function greet(a){
    return `Hello ${a}!`
}
console.log(greet("guga"))
//4
function biggest(a, b, c){
    if (a>b && a>c){
        return a
    }
    else if (b>a && b>c){
        return b
    }
    else if (c>a && c>b){
        return c
    }
    else {
        return "There is no biggest"
    }
}
console.log(biggest(4, 6, 7))
//5
function isAdult(a){
    if (a<18){
        return "child"
    }
    else{
        return "adult"
    }
}
console.log(4)
//6
for (let i = 1; i<=100; i++){
    console.log(i)
}
//7
for (let i = 2; i<=50; i++){
    if(i%2==0){
        console.log(i)
    }
}
//8
let total = 0
for (let i =1; i<=100; i++){
    total+=i
}
console.log(total)
//9
for (let i = 10; i>1;i--){
    console.log(i)
}
//10
for(let i = 0; i<=100;i++){
    if(i%7==0){
        console.log(i)
    }
}
//11
let i = 1
while(i<20){
    i++
    console.log(i)
}
//12
let b = 1
let totalB = 0
while(b<50){
    b++
    totalB+=b
}
console.log(totalB)
//13
let c = 1
while(c<25){
    if (c%2!=0){
        c++
        console.log(c)
    }
}
//14

//15
let e = 1
while(e<100){
    if(e%3==0){
        e++
        console.log(e)
    }
}
//16
let f =1
do{
    f++
    console.log(f)
}while(f<10)
//17
let v =2
do{
    if(v%2==0){
        v++
        console.log(v)
    }
}while(v<20)
//18

//19
let m = Math.random()
do{
    m*13
}while(m==10)
//20
function prime(a){
    
}
//21
function square(a){
    return a*a
}
//22
function a(a){
    if(a%2==0){
        return "even"
    }
    else if (a==0){
        return 0
    }
    else{
        "odd"
    }
}
//23
function temperature(a){
    if(a<10){
        return "cold"
    }
    else if (a<20){
        return "warm"
    }
    else{
        "hot"
    }
}
//24