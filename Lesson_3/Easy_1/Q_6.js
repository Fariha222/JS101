//LAUNCH SCHOOLS METHOD
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
let newAges = {};
Object.assign(newAges,ages,additionalAges);
console.log(newAges); //now ages is not mutated
/*
//#MY METHOD
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
ages['Marilyn'] = 22;
ages['Spot'] = 237;*/
console.log(ages);
