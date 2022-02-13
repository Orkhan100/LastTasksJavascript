"use strict"

let num = prompt("Enter a number: ");

let factorial = 1;

for (let i = 1; i <= num; i++) {

    factorial*=i;
}


alert("Factorial: " + factorial);
