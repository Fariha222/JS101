let advice = "Few things in life are as important as house training your pet dinosaur.";
//LAUNCH SCHOOLS METHOD
let newAdvice = advice.slice(0, advice.indexOf('house'));
//METHOD 2 is not viable as splice only occurs on array
/*let advice1 = "Few things in life are as important as house training your pet dinosaur.";
let onceMoreAdvice = advice1.splice(advice1.indexOf('house'), advice1.length));
console.log(onceMoreAdvice);
/*
//MY METHOD
let adviceArray = advice.split(' ');
let index = adviceArray.indexOf("house");
length = adviceArray.length - index
adviceArray.splice(index, length);
newAdvice = adviceArray.join(' ');*/
console.log(newAdvice);
