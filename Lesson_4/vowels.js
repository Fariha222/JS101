let string = "what's adey ADEIUE up doc?";
let newString = string.split('').filter(char => "aeiou".includes(char.toLowerCase())).join(', ');
console.log(newString);
