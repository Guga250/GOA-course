/*

*/
//41
function bigger(a,b){
    if (a>b){
        return a
    }
    else if (b>a){
        return b
    }
    else{
        return "ტოლია"
    }
}
console.log(bigger(2,3))
//42
function multyiplyTable1to10(a){
    for(let i = 1; i<=10; i++){
        console.log(`${i} multiply ${a} = ${i * a}`)
    }
    
}
multyiplyTable1to10(3)
//43
function divideCheck(a){
    for(let i = 1; i<=a; i++){
        if (a%i===0){
            console.log(`${a} can be divided by ${i}.`)
        }
    }
}
divideCheck(20)
//44
for (let i = 1 ; i<=100; i++){
    if(i%2==0 && i%3==0){
        console.log(i)
    }
}
//45
/*
function IsPalindrome(a){
    for (let i = 1; i<a.lenght()++){
        console.log()
    }
}
*/
//46
let i = 1
let result = null
while(i<1000){
    if(i%11==0){
        result = i
        break
    }
    i++
}
console.log(result)
//47
let b = (Math.random()).floor*21
function guess_number_1to20(a){
    if (a<1 || a>20){
        console.log("Invalid number")
    }
    else {
        while(a!=b){
            console.log("Number guessed!")
        }
    }
}
guess_number_1to20(4)
//48
//49
let oddResult = 0
let evenResult = 0
function listOddOrEven(a){
    for (let i = 0; i<a.length; i++){
        if(i%2==0){
            return evenResultResult+=i
        }
        else {
            return oddResult+=i
        }
    }
}
console.log(listOddOrEven([4, 3, 4, 4, 3, 3, 3, 6]))
//50
function size(a){
    if(a<100){
        return "პატარაა"
    }
    else if (a>100){
        return "დიდია"
    }
    else{
        return "ტოლია"
    }
}