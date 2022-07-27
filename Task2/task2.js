function shallowEquals (sourceObj, targetObj) {
  const sourceObjKeys = Object.keys(sourceObj);
  const targetObjKeys = Object.keys(targetObj);

  if (sourceObjKeys.length !== targetObjKeys.length) return false

  for (const key of sourceObjKeys) {
    if (!targetObj.hasOwnProperty(key)) return false
    if (sourceObj[key] !== targetObj[key]) return false
  }
  return true
}

console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" })); // true
console.log(shallowEquals({ a: 0 }, { a: undefined })); // false
console.log(shallowEquals({ a: {} }, { a: {} })); // false
console.log(shallowEquals({ a: [] }, { a: [] })); // false
console.log(shallowEquals({ a: () => {} }, { a: () => {} })); // false
