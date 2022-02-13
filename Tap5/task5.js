"use strict"

let money = prompt("Write money which you want: ");
let month = prompt("Count of month: ");

let residue = (money % month);

let credit = (money - residue) / month;
let arr = []

for (let row = 1; row < month; row++) {
    for (let i = 1; i <= month; i++) {
        arr[i] = credit;
    }
    console.log(row + "-ci ay " + credit)
}

arr[month] = credit + residue

console.log(month + "-ci ay " +  arr[month])

