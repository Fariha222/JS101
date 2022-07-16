let munstersDescription = "The Munsters are creepy and spooky.";

munstersArray = munstersDescription.split('');
munstersArray.forEach(element => {
  for (let index = 0; index < element; index += 1) {
    if (element[index] === element[index].toUpperCase()) {
      return element[index].toLowerCase();
    }  else  {
      return element[index].toUpperCase();
    }
  }munstersArray.join('') });
console.log(munstersArray);
/*

for (let char = 0; char < munstersDescription.length; char += 1) {
  if (munstersDescription[char] === munstersDescription[char].toUpperCase()){
    return munstersDescription[char].toLowerCase();
  }  else  {
    return munstersDescription[char].toUpperCase();
  }
}
console.log(munstersDescription);
*/
