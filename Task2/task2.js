function shallowEquals (firstObj, secObj) {
  const firstObjKeys = Object.keys(firstObj);

  for (let key of firstObjKeys) {
    if (!secObj.hasOwnProperty(key)) return false
    if (firstObj[key] !== secObj[key]) return false
  }
  return true
}

shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }); // true
shallowEquals({ a: 0 }, { a: undefined }); // false
shallowEquals({ a: {} }, { a: {} }); // false
shallowEquals({ a: [] }, { a: [] }); // false
shallowEquals({ a: () => {} }, { a: () => {} }); // false
