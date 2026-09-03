//11
const rectangle = {
    name:"triangle",
    color:"red",
    unit:"cm",
    area:function(width,height){
        return width*height
    },
    perimeter:function(width,height){
        return (width+height)*2
    }
}
//12
const movie = {
    name:"Zombies",
    genre:"Action",
    director:"Guga jajanidze",
    year:2015,
    checkAge: function(age){
        if (age>18){
            return "is allowed"
        }
        else{
            "isn't allowed"
        }
    },
    isNew:function(currentYear){
        currentYear=2026
        if(2026-movie.year >=5){
            return "not new movie"
        }
    }
}
//13
const passwordChecker = {
    name:"Best password checker",
    version: "1.5",
    checkLenght:function(text){
        if(text.length>8){
            return true
        }
    },
    hasNumber:function(a){
        if(/\d/.test(a)){
            return "has numbers"
        }else{
            return "does not have numbers"
        }
    }
}
//14
const circle = {
    name: "jay",
    unit:"deg",
    area: function(radius){
        return 3.14*(radius*radius)
    },
    circumference: function(radius){
        return 2*radius*3.14
    },
    diameter: function(radius){
        return radius*radius
    }
}
//15
const gradeCalculator ={
    name:"javascript calculator",
    subject:"math",
    averge: function(a,b,c){
        return (a+b+c)/3
    },
    getGrade:function(score){
        if(score>=90){
            return "A"
        }else if(score>80 && score<89){
            return "B"
        }else if(score>70 && score<79){
            return "C"
        }else if(score>60 && score<69){
            return "D"
        }else{
            return "F"
        }
    },
    isPassed:function(score){
        if(score>=60){
            return true
        }else{
            return false
        }
    }
}