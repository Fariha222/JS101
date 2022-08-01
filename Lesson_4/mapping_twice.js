let str = "What's, up Doc?";
let double = str.split("").map(char => char + char + char + char).join('');
console.log(double);
