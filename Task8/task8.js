function arrayToObject( array ) {
  const finalObject = {};
  for (const item of array) {
    finalObject[item.name] = item.value
  }
  return finalObject;
}

function objectToArray(object) {
  const finalArray = [];
  const objEntries = Object.entries(object);
  for (const [name, value] of objEntries) {
    finalArray.push({name, value})
  }
  return finalArray
}



const array = [
  { name: "width", value: 100 },
  { name: "height", value: 50 },
]

console.log(arrayToObject(array));
console.log(objectToArray(arrayToObject(array)));
