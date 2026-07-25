//forEach                        
//1                               
const words = ["ვაშლი", "მსხალი", "ატამი", "საზამთრო", "ალუბალი"]
words.forEach(function(fruit){
    if(fruit.length >5){
        console.log(fruit)
    }
})
//2                               
const dailyExpenses = [12, 45, 8, 23, 50]
let totalExpense = 0
dailyExpenses.forEach(function(num){
    totalExpense+=num
})
console.log(totalExpense)
//map                          
//1                              
const productPrices = [10, 25, 50, 100, 200]
const salePrices = productPrices.map(num => num*0.8)
console.log(salePrices)
//2                 
const birthYears = [1995, 2002, 1988, 2010]
const ages = birthYears.map(num => 2026-num)
console.log(ages)
//filter
//1
const mixedNumbers = [7, 12, 19, 22, 35, 40, 51]
const evenNumbers = mixedNumbers.filter(num => num%2==0)
console.log(evenNumbers)
//2
const emailList = ["gio@gmail.com", "test-email", "ani@yahoo.com", "invalid_address", "luka@outlook.com"]
const validEmails = emailList.filter(num => num.includes("@"))
console.log(validEmails)
//findIndex
//1
const runTimes = [12.5, 11.2, 9.8, 10.4, 13.1]
const bestRun = runTimes.findIndex(num => num<10)
console.log(bestRun)
//2
const items = ["კალამი", "რვეული", "ჩანთა", "ტელეფონი", "სკამი"]
const startsWithT = items.findIndex(word => word.startsWith("ტ"))
console.log(startsWithT)