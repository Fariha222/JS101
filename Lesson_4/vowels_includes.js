/*function selectVowels(str) {
  let selectedChars = '';

  for (let counter = 0; counter < str.length; counter += 1) {
    let currentChar = str[counter];

    if ('aeiouAEIOU'.includes(currentChar)) {
      selectedChars += currentChar;
    }
  }

  return selectedChars;
}
console.log(selectVowels("How are you Anna?"));
*/
function selectVowels(str){
 let outputStr = "";
 for (let index = 0; index < str.length; index += 1) {
          let char = str[index]
		 if ("aeiouAEIOU".includes(char)) {
			 outputStr += char;
		 }
 }console.log(outputStr);
}
selectVowels("anna jakes fTREIO");
