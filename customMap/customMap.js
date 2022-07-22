export default function (array, callback) {
  const newArray = [];
  array.forEach((item) => {
    newArray.push(callback(item))
  });
  return newArray;
}
