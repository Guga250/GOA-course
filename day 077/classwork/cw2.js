//1
const calculator = {
    name:"calculator",
    type:"number",
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}
//2
const person ={
    name:"ioane",
    surname:"beridze",
    age:20,
    height: "2m",
    weight: "80kg",
    greet: function(){
        return "Hello ioane!"
    }
}
//3
const math = {
    name:"math",
    version:"algebra",
    square:function(a){
        return a*a
    },
    cube:function(a){
        return a*a*a
    },
    isEven:function(a){
        if(a%2==0){
            return true
        }
        else{
            return false
        }
    }
}
//4
const stringHelper = {
    name:"Helper",
    language:"english",
    upper:text => text.upper,
    lower:text => text.lower,
    length:text => text.length
}
//5
const temperature = {
    name: "temperature",
    unit: "kelvin",
    toFahrenheit:function(num){
        return (num-273.15)*9/5+32
    },
    toCelsius:num => num-273.15
}
//6
const student ={
    name:"nika",
    surname:"mwedlidze",
    school:"1st public school",
    grade:"76/100",
    checkGrade:function(score){
        if(score>=90){
            return "Excellent"
        }
        else{
            good
        }
    },
    isPassed:function(score){
        if(score>=51){
            return true
        }
        else{
            false
        }
    }
}