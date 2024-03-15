//Assignment 15 
//Task15
var guestarry = ["Usama", "Muzammil", "Ali", "Arslan",];
var cannotattend = "Ali";
//console.log(cannotattend + " " + cannotattend attend the dinner)
var newGuest = "Bilal";
guestarry[guestarry.indexOf(cannotattend)] = newGuest;
guestarry.map(function (items) { return console.log("Dear ".concat(items, " you are invited to the dinner")); });
