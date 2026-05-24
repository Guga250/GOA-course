//1
switch (num=5){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("wrong day")
}
//2
function calculator(a, b, operator){
    switch (operator){
        case "+":
            return a+b
            break
        case "-":
            return a-b
            break
        case "*":
            return a*b
            break
        case "/":
            return a/b
            break
    }
}
console.log(calculator(5, 5, "+"))
//3
function oddEven(num){
    if (num%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
function oddEven2(num){{
    num%2==0?"even":"odd"
}
}
function oddEven3(num){
    switch (num){
        case num%2==0:
            return "even"
            break
        default:
            return "odd"
    }
}
//4
function greet(language){
    switch(language){
        case "ka":
        return "გამარჯობა"
        break
        case "fr":
        return "bonjour"
        break
        case "en":
        return "hi"
        break
    }
}
//5
function getGrade(score){
    if (score >=90 && score<=100){
        return "A"
    }
    else if (score >=80 && score<=89){
        return "B"
    }
    else if (score >=70 && score<=79){
        return "C"
    }
    else if (score >=80 && score<=89){
        retur"D"
    }
}