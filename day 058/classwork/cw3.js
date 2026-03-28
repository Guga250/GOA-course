/*
toLowerCase string-ს ასოებს აპატარავებს მაგ:
toUpperCase, indexOf, trim, trimEnd, trimStart
*/
let loww = "ABCDE"
console.log(loww.toLowerCase())
let loww2 = "GuGA"
console.log(loww2.toLowerCase())
// toUpperCase string_ს ადიდებს მაგ:
let highh = "aaaaa"
let hig2 = "abcdddd"
console.log(highh.toUpperCase())
console.log(hig2.toUpperCase())

//indexOf ვუთითებთ ასოს და რომელი ასოც შეხვდება პირველი იმას Index გამოიტანს
let aaa = "hello"
console.log(aaa.indexOf("l"))
let aa = "guga"
console.log(aa.indexOf("g"))
// trim ზედმეტ ნაგავს აშორებს მაგ:
console.log("`````guga````".trim())
// trimEnd ბოლო ნაგავს აშორებს
console.log("`````guga````".trimEnd())
// trimStart პირველ ნაგავს აშორებს
console.log("`````guga````".trimStart())