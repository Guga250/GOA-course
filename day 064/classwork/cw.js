function greet(nam){
    return `Hello ${nam}`
}
console.log(greet("guga"))
//2
function compare(a, b){
    if (a>b){
        return "a მეტია b-ზე"
    }else if (a<b){
        return "b მეტია a-ზე"
    }else{
        return "a უდრის b-ს"
    }
}
console.log(compare(5, -4))
//3
function kelvinToCelsius(kelvin){
    let c= kelvin-273.15
    return c
}
console.log(kelvinToCelsius(300))
function fahrenheitToCelsius(fa){
    let c2 = (fa - 32) * (5 / 9)
    return c2
}
console.log(fahrenheitToCelsius(70))
//4
function checkAge(age){
    if (age<18){
        return "user is not adult"
    }else if(age>=18&& age<=59){
        return "user is adult"
    }else{
        return "user is senior"
    }
}
console.log(checkAge(60))