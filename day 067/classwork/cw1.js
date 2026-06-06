// 1

function sumNumber(a,b){
    return a+b
}
console.log(sumNumber(5,4))//9

// 2

const isEven = a =>{
    if (a%2==0){
        return "ლუწია"
    }else{
        return "კენტია"
    }
}
console.log(isEven(5)) //კენტია

// 3


const fullName= function(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName("Guga", "Jajanidze")) //Guga jajanidze

// 4


const square = a => a*a
console.log(square(20))

// 5


function maxOfThree(a, b, c){
    if (a>b){
        return a
    }
    else if(b>a){
        return b
    }
    else if(a>c){
        return a
    }
    else if(c>a){
        return c
    }
    else if(b>c){
        return b
    }
    else if(c>b){
        return c
    }
}
console.log(maxOfThree(5, 21, -4))

// 6

//7
//abcdefghijklmnopqrstwxyz
const toUpper = a => a.toUpperCase()
console.log(toUpper("aaa"))

// 8

function checkAge(age){
    if (age>18){
        return "სრულწლოვანი"
    }
    else{
        return "არასრულწლოვანი"
    }
}