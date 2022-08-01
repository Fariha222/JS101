let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
let	scoreA = a.reduce ((sum, element) => sum + element);
let scoreB = b.reduce ((sum, element) => sum + element);

return scoreA - scoreB;
});
console.log(scores);
