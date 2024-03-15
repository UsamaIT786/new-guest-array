//Assignment 15 
//Task15

let guestarry : String[] = ["Usama","Muzammil","Ali","Arslan",];
let cannotattend : string = "Ali"

//console.log(cannotattend + " " + cannotattend attend the dinner)
let newGuest : String = "Bilal";
guestarry[guestarry.indexOf(cannotattend)] = newGuest;
guestarry.map((items) => console.log(`Dear ${items} you are invited to the dinner`));