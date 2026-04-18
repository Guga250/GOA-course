let firstName = "Guga"
//startsWith ამოწმებს იწყება თუ არა გადაცემულ ასოთი
console.log(firstName.startsWith("G"))
//endsWith ამოწმებს მთავრდება თუ არა გადაცემულ ასოთი
console.log(firstName.endsWith("a"))
//indexOf ასოს ვუთითებთ და პირველ გადაცემულ ასოის ინდექს აბრუნებს
console.log(firstName.indexOf("u"))
//includes გადაეცემა რაიმე სტრინგი და ამოწმებს ეს სტრინგი მოცემულ ტექსტში არის თუ არ არის.
console.log(firstName.includes("Gu"))
//toUpperCase ტექსტს ადიდებს
console.log(firstName.toUpperCase())
//toLowerCase ტექსტს აპატარავებს
console.log(firstName.toLowerCase())
//trim White Space-ს ჭრის
console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!aannkkii!!!!!!!!!!!!!!!!!!!!!!!!!11".trim())
//replace გადაეცემა ორი სტრინგი პირველი რა ჩავანაცვლოთ და მეორე კი რითი ჩავანაცვლოთ. ეს ხდება იმ დროს როცა პირველ არგუმენტს იპოვის
console.log(firstName.replace("Gug", "Nik"))
//replaceAll იგივეს შვება როგორც replace მაგრამ პირველი არგუმენტს ყველგან ანაცველბს მეორე არგუმენტით
console.log(firstName.replaceAll("G", "aa"))
//trimEnd ბოლოში ჭრის
console.log("!!!!!!!!!!!!!!!!!!!guga!!!!!!!!!!!!!!!!!!!".trimEnd())
//trimStart დასაწყიში ჭრის
console.log("!!!!!!!!!!!!!!!guga!!!!!!!!!!!".trimStart())
//repeat რიცხვი გადაეცემა და იმდენჯერ იმეორებს სიტყვას
console.log(firstName.repeat(3))
//slice ჭრის სტრინგს და გადაეცემა ინდექსი, რომ საიდან სადამდე გაჭრას
console.log(firstName.slice(1,3))
