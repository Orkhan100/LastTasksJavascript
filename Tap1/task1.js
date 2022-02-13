"use strict"

let seasons = prompt("Enter number of season: ")

switch (true) {
    case (seasons == 1):
        alert("Winter")
        break;
    case (seasons == 2):
        alert("Spring")
        break;
    case (seasons == 3):
        alert("Summer")
        break;
    case (seasons == 4):
        alert("Fall")
        break;
    default:
        alert("There is not season number. Please try again.")
        break;
}
