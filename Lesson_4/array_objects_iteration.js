//let [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ];//not possible
let array = [ 'foo', 'bar', 'qux'];
array["boo"] = 'hoo';
array['-1'] = 374 ;
console.log(array);
console.log(array.length); // only shows own propertise
Object.keys(array).forEach(ele=> console.log(ele));
Object.values(array).forEach(ele=> console.log(ele));
console.log(array.hasOwnProperty("boo"));
