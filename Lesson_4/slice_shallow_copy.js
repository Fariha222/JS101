let arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', [1,2,3] ];
let copyArr = arr.slice();
copyArr[7][1]=39;
console.log(arr);
console.log(copyArr)
