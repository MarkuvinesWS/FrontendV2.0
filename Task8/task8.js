function arrayToObject( array ) {
  const finalObject = {};
  for (const item of array) {
    finalObject[item.name] = item.value
  }
  console.log(finalObject)
  return finalObject;
}

function objectToArray(object) {
  const finalArray = [];
  const objEntries = Object.entries(object);
  for (const [name, value] of objEntries) {
    finalArray.push({name, value})
  }
  console.log(finalArray);
}



const array = [
  { name: "width", value: 100 },
  { name: "height", value: 50 },
]
objectToArray(arrayToObject(array))
