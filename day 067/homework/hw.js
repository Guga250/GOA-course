//9
const divide = (a,b) => a/b
console.log(divide(10, 2))
//10
const greet = function(name){
    return `Welcome ${name}.`
}
console.log(greet("Guga"))
//11
function isPositive(a){
    if(a>0){
        return "positive"
    }else{
        return "negative"
    }
}
console.log(isPositive(-2))
//12
const len = (text)=> text.length
console.log(len("guga"))
//13
function calculateArea(a,b){
    return a*b
}
console.log(calculateArea(5,4))