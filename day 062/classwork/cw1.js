//1
let age = 19
let hasID = false
if(age >18 && hasID==true){
    console.log("Acces allowed")
} else{
    console.log("Acces denied")
}
//2
let username = "Gugavar2013"
let password = "3102ravaguG"
if (username== "admin" && password=="1234"){
    console.log("Login succesful")
} else{
    console.log("Login failed")
}
//3
let nuumber = "9"
if (nuumber>0 && nuumber>10){
    console.log("Between 0 and 10")
}else{
    console.log("Out of range")
}
//4
let score = "49"
if (score>50&& score<100){
    console.log("Passed")
}else{
    console.log("Filed")
}
//5
let hour = 24
if (hour>9 && hour<18){
    console.log("work hours")
}else{
    console.log("off hours")
}
//6
let agee= 13
let ticket= true
if (agee<12 || agee>60){
    console.log("discount")
}
else if (ticket==true && (age>12&&age<60)){
    console.log("Normal entry")
}else{
    console.log("no entry")
}
//7
let temperature = 20
if (temperature>30 || temperature<0){
    console.log("extreme weather")
}else {
    console.log("normal weather")
}
//8
let isStudent=true
let Grade=20
if (isStudent==true && Grade>90){
    console.log("exelent grade")
}
else if (isStudent==true && Grade>50){
    console.log("passed")
}else {
    console.log("Failed or not a student")
}
//9
loggedIn =true
isAdmin =false
if (loggedIn==true && isAdmin==true){
    console.log("admin panel")
}
else if (loggedIn==true && isAdmin==false){
    console.log("user")
}else{
    console.log("please log in")
}
