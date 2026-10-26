//4
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", ()=>{
    btn1.style.backgroundColor = "blue"
})
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", ()=>{
    btn2.style.backgroundColor = "yellow"
})
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", ()=>{
    btn3.style.backgroundColor = "purple"
})
//5
const text = document.getElementById("text")
const btn15 = document.getElementById("btn15")
const btn30 = document.getElementById("btn30")
btn15.addEventListener("click", ()=>{
    text.style.fontSize = "15px"
})
btn30.addEventListener("click", ()=>{
    text.style.fontSize = "30px"
})

/*
დავალება 5 — ტექსტის ზომის შეცვლა

შექმენით 2 ღილაკი (btn1, btn2) და ერთი პარაგრაფი (text). JavaScript-ის საშუალებით:
1. პირველ ღილაკზე დაჭერისას ტექსტის ზომა გახდეს 30px.
2. მეორე ღილაკზე დაჭერისას ტექსტის ზომა გახდეს 15px.

დავალება 6 — სურათის დამალვა და გამოჩენა

შექმენით ერთი სურათი (image) და 2 ღილაკი (btn1, btn2). JavaScript-ის საშუალებით:
1. პირველ ღილაკზე დაჭერისას სურათი დაიმალოს.
2. მეორე ღილაკზე დაჭერისას სურათი გამოჩნდეს.

დავალება 7 — სათაურის ფერის შეცვლა

შექმენით ერთი სათაური (heading) და 3 ღილაკი (btn1, btn2, btn3). JavaScript-ის საშუალებით:
1. პირველ ღილაკზე დაჭერისას სათაურის ფერი გახდეს წითელი.
2. მეორე ღილაკზე დაჭერისას სათაურის ფერი გახდეს მწვანე.
3. მესამე ღილაკზე დაჭერისას სათაურის ფერი გახდეს ლურჯი.

დავალება 8 — პარაგრაფის ტექსტის შეცვლა

შექმენით ერთი პარაგრაფი (text) და 2 ღილაკი (btn1, btn2). JavaScript-ის საშუალებით:
1. პირველ ღილაკზე დაჭერისას პარაგრაფში დაიწეროს Hello!.
2. მეორე ღილაკზე დაჭერისას პარაგრაფში დაიწეროს Goodbye!.
*/