export function less65() {
  const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
  };
  
  let arrValues = [];
  
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      arrValues = arrValues.concat(obj[key]);
    } else {
      arrValues.push(obj[key]);
    }
  }
  
  alert(arrValues);
}
