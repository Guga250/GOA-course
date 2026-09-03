//1 
let num = [3,  4, 6, 1]
num.forEach(number => console.log(number))
//2
let names = ["Guga", "Gio", "Luka", "Zura"]
names.forEach(name => `Hello, ${name}`)
//4 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numss = nums.map(num => num*2)
//5
let goodNames = ["Guga", "Gio", "Luka", "Zura"]
let naames = goodNames.map(name => name.toUpperCase())
//7
let nu = [3,  4, 6, 1]
let nu2 =nu.filter(num => num%2==0)
//8
let na = [10, 4, 3, 100]
let na2 = nu.filter(num => num>10)
//10
let nuu = [6565, 2342, 673, 6346363]
let nuu2 =nuu.find(num => num%2==0)
//11
let naa = [1000, 5665, 75, 1]
let naa2 = naa.find(num =>num>20)
//13
let numbers = [5,4,3,6,3,6,3,8,1,5,7,7,43]
let numbers2= numbers.findIndex(num => num%2==0)
//14
let veryGoodNames = ["roger", "lisa", "guga", "bob", "Nika"]
let veryGoodNames2 = veryGoodNames.findIndex(a => a=="Nika")
