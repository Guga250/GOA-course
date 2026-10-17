//1
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1997,
    pages: 300,
}

const {title,author} = book

//2
const movie = {
    title: "Avatar",
    year: 2009,
    rating: 4,
    genre: "Sci Fi",
}

const { rating: movieRating } = movie

//3
const employee = {
    name: "Guga",
    position: "Developer",
    salary: 2000,
    department: true,
}

const { name, position, salary: monthlySalary } = employee

//4, 5
const game = {
    name: "Minecraft",
    developer: "Mojang",
    year: 2011,
    genre: "Sandbox",
    rating: 9
}

const {name1,developer: gameDeveloper,rating: gameRating} = game;