//MY METHOD
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let flintstonesList = (Object.entries(flintstones));
let barney = flintstonesList[2];
console.log(barney);

//LAUNCH SCHOOLS METHOD
let flintstones1 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let flintstones2 = Object.entries(flintstones1).filter(pair => pair[0] === "Barney").shift();
console.log(flintstones2);
