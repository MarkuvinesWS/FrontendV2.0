function customMap (array, callback) {
  const newArray = [];

  array.forEach((item) => {
    newArray.push(callback(item))
  });

  return newArray;
}

console.log(customMap([1, 2, 3, 4, 5], (item2) => item2 + 2) )
