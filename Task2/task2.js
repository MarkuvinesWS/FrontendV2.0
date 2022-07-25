function shallowEquals (firstObj, secObj) {
  const firstObjKeys = Object.keys(firstObj);

  for (let key of firstObjKeys) {
    if (!secObj.hasOwnProperty(key)) return false
    if (firstObj[key] !== secObj[key]) return false
  }
  return true
}

console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" })); // true
console.log(shallowEquals({ a: 0 }, { a: undefined })); // false
console.log(shallowEquals({ a: {} }, { a: {} })); // false
console.log(shallowEquals({ a: [] }, { a: [] })); // false
console.log(shallowEquals({ a: () => {} }, { a: () => {} })); // false
