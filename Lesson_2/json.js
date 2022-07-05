function parseJSON(data) {
  let result;
try {
  result = JSON.parse(data);//Throws an exception if data is invalid
} catch (o) {
  console.log('There was a', o.name, 'parsing JSON data:', o.message);
  result = null;
} finally {
  console.log('Finished parsing data')
}
return result;
}

let data = 'not valid JSON';

console.log(parseJSON(data));
