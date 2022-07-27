function pathGen (path, value, obj) {

  path.reduce((prev, current, currentIndex) => {
    if (currentIndex === path.length - 1) {
      prev[current] = value
      return obj;
    }
    if (prev[current]) {
      return prev[current];
    }
    prev[current] = {};
    return prev[current];
  }, obj )

  return obj;
}

console.log(pathGen(['user', 'name'], 'Sam', { user: {city: 'Chicago'} }))
