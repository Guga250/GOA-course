//1.
console.log("დავალება 1")
function getSeason(month){
    switch (month){
        case 12:
        case 1:
        case 2:
            return "ზამთარი";
            break
        case 3:
        case 4:
        case 5:
            return "გაზაფხული";
            break
        case 6:
        case 7:
        case 8:
            return "ზაფხული";
            break
        case 9:
        case 10:
        case 11:
            return "შემოდგომა";
            break
    }
}
console.log(getSeason(4))
//2
console.log("დავალება 2")
function mathSymbols(Symbol){
    switch (Symbol){
        case "+":
            return "მიმატება"
            break
        case "-":
            return "გამოკლება"
            break
        case "*":
            return "გამრავლება"
            break
        case "/":
            return "გაყოფა"
            break
        default:
            return "ეს სიმბოლო გაუგებარია"
    }
}
console.log(mathSymbols("&"))
//3
console.log("დავალება 3")
function isAdult(age){
    if (age>=18){
        return "სრულწლოვანი"
    }
    else{
        return "არასრულწლოვანი"
    }
}
console.log(isAdult(18))
function isAdult2(age){
    return age >= 18?"სრულწლოვანი": "არასრულწლოვანი"
}
console.log(isAdult2(18))
//4
console.log("დავალება 4")
function trafficLight(color){
    switch (color){
        case "red":
            return "გაჩერდი"
            break
        case "yellow":
            return "მოემზადე"
            break
        case "green":
            return "წადი"
    }
}
console.log("yellow")
//5
console.log("დავალება 5")
function maxNumber(a, b){
    if (a>b){
        return a
    }
    else if(a=b){
        return "ტოლია"
    }
    else{
        return b
    }
}
console.log(maxNumber(3, 3))