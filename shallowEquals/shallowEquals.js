export default function shallowEquals (firstObj, secObj) {
  const firstObjKeys = Object.keys(firstObj);
  for (let key of firstObjKeys) {
    if (!secObj.hasOwnProperty(key)) return false
    if (firstObj[key] !== secObj[key]) return false
  }
  return true
}

