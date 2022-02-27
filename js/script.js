"use strict";

// let  number = 4.6;
// console.log(-4/0);
// console.log("string" * 9);

// const person = "Alex";

// const bool = false;

// // console.log(something);

// let und;

// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.isMarried);
// console.log(obj["isMarried"]);

// let arr = ["plum.png", "orange.jpg", "apple.bmp", 6, {}, []];
// console.log(arr[0]);

// alert("hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18?", "0");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("Your name?", "");
// answers[1] = prompt("Your last name?", "");
// answers[2] = prompt("Your age?", "");

// document.write(answers);

// const category = "toys";

// console.log(`https://url.com/${category}/5`)

// const user = "alex";

// console.log(`Hello, ${user}`);

// Операторы в JS
// ---------------------------------------------

// console.log("arr" + "- object");
// console.log(4 + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// ++incr;
// --decr;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log(2*4 == "8");
// console.log(2*4 === "8");
// console.log(2 + 2 * 2 === "8");
// console.log(2 + 2 * 2 != "8");
// console.log(2 + 2 * 2 !== "8");

// const isChecked = true,
//       isClosed =  true;

// console.log(isChecked && isClosed);
// console.log(isChecked || isClosed);
// console.log(isChecked || !isClosed);


// Практика 1
// ---------------------------------------------

// const numberOfFilms = prompt("How many movies have you watched?")

// let personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };

// let movieOne = prompt("What movie?");
// let rateOne = prompt("Rate?");
// let movieTwo = prompt("What movie?");
// let rateTwo = prompt("Rate?");

// personalMovieDB.movies[movieOne] = rateOne;
// personalMovieDB.movies[movieTwo] = rateTwo;

// console.log(personalMovieDB.movies);

// Условия
// ---------------------------------------------

// if ( 4 == 9) {
//     console.log("OK");
// } else { console.log("false");}

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("toom any");
// } else {console.log("OK!");}

// // (num === 50) ? console.log("OK!") : console.log("Error");

// const num = 51;

// switch (num) {
// case 49: 
//     console.log("false");
//     break;

// case 100:
//     console.log("false");
//     break;

// case 50:
//     console.log("True");
//     break;

// default:
//     console.log("other time");
//     break;

// }

// Циклы
// ---------------------------------------------

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//         num++;
    

// } while (num < 55);

// for (let i = 1; i < 10; i++) {
  
//     if (i === 6  ){
//     //   break;
//     continue;
//     }
//     console.log(i);
    
    
// }

// Практика 2
// ---------------------------------------------

// const numberOfFilms = prompt("How many movies have you watched?")

// let personalMovieDB = {
// count: numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };

// let movieOne = prompt("What movie?");
// let rateOne = prompt("Rate?");
// let movieTwo = prompt("What movie?");
// let rateTwo = prompt("Rate?");

// personalMovieDB.movies[movieOne] = rateOne;
// personalMovieDB.movies[movieTwo] = rateTwo;

// for (let i = 0; i < numberOfFilms; i++) {
//     let movie = prompt("What movie?");

//     let rate = prompt("Rate?");

//     if (movie != null && rate != null && movie.length < 50 && movie != '' && rate != '') {
//         personalMovieDB.movies[movie] = rate;
//     } else {
//         i--;
//     } 

// }

// let i = 0;
// do {
//     let movie = prompt("What movie?");

//         let rate = prompt("Rate?");
    
//         if (movie != null && rate != null && movie.length < 50 && movie != '' && rate != '') {
//             personalMovieDB.movies[movie] = rate;
//         } else {
//             i--;
//         } 

//         i++;
// } while(i < numberOfFilms);

// console.log(personalMovieDB.movies);

// if (personalMovieDB.count < 10) {
//     alert("Not that much");
    
// } else if (10 <= personalMovieDB.count < 30 ) {
//     alert("You're a classic");

// } else if (personalMovieDB.count >= 30) {
//     alert("You're a movie-lover");
// } else {alert("error");}

// switch (personalMovieDB.count) {
//     case personalMovieDB.count < 10:
//         alert("Not that much");
//         break;

//     case 10 <= personalMovieDB.count <=30:
//          alert("You're a classic");
//          break;    
//     case personalMovieDB.count > 30:
//         alert("You're a movie-lover");
//     default:
//         alert("error");
//         break;
// }

// console.log(personalMovieDB.count);

// Функции, стрелочные
// ---------------------------------------------

// let num = 20;

// function showFirstMesage(text) {
//     console.log(text);
//     num = 10;
//     console.log(num);
// }

// showFirstMesage("Hey");
// console.log(num);

// function calc (a, b) {
//     return a + b;
// }

// console.log(calc(1,2));

// function ret() {
//     let num = 50;
    
    
    
    
//     return num;    
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {

// console.log("Hello");

// };

// logger();

// const calc = (a, b) => {return a + b;};
// console.log(calc(5,4)); 

// Методы, свойства строк и чисел
// ---------------------------------------------

// const str = "test";
// const arr = [1,2,4];

// console.log(arr.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "some fruit";

// console.log(fruit.indexOf("fruit"));
// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Практика 3
// ---------------------------------------------

let numberOfFilms;

function start () {

    numberOfFilms = +prompt("How many movies have you watched?");    
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        
        numberOfFilms = +prompt("How many movies have you watched?");    

    }

}

start();

function showMyDB(hidden) {

    if (!hidden) {
        console.log(personalMovieDB);
    }

}







let personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

    
    
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером: ${i}`);
        
    }

}

console.log(personalMovieDB.genres);
console.log(personalMovieDB);

writeYourGenres();

// let movieOne = prompt("What movie?");
// let rateOne = prompt("Rate?");
// let movieTwo = prompt("What movie?");
// let rateTwo = prompt("Rate?");

// personalMovieDB.movies[movieOne] = rateOne;
// personalMovieDB.movies[movieTwo] = rateTwo;



function rememberMyFilms() {

    for (let i = 0; i < numberOfFilms; i++) {
        let movie = prompt("What movie?");
    
        let rate = prompt("Rate?");
    
        if (movie != null && rate != null && movie.length < 50 && movie != '' && rate != '') {
            personalMovieDB.movies[movie] = rate;
        } else {
            i--;
        } 
    
    }

}

rememberMyFilms();

// let i = 0;
// do {
//     let movie = prompt("What movie?");

//         let rate = prompt("Rate?");
    
//         if (movie != null && rate != null && movie.length < 50 && movie != '' && rate != '') {
//             personalMovieDB.movies[movie] = rate;
//         } else {
//             i--;
//         } 

//         i++;
// } while(i < numberOfFilms);

// console.log(personalMovieDB.movies);




function detectPersonalLever() {

    if (personalMovieDB.count < 10) {
        alert("Not that much");
        
    } else if (10 <= personalMovieDB.count < 30 ) {
        alert("You're a classic");
    
    } else if (personalMovieDB.count >= 30) {
        alert("You're a movie-lover");
    } else {alert("error");}

}

detectPersonalLever();

// switch (personalMovieDB.count) {
//     case personalMovieDB.count < 10:
//         alert("Not that much");
//         break;

//     case 10 <= personalMovieDB.count <=30:
//          alert("You're a classic");
//          break;    
//     case personalMovieDB.count > 30:
//         alert("You're a movie-lover");
//     default:
//         alert("error");
//         break;
// }

console.log(personalMovieDB.count);