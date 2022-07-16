//MY METHOD
let title = "Flintstone Family Members";
console.log(title.padStart(40, ' '));
//LAUNCH SCHOOL METHOD
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + title.length, '*'));
