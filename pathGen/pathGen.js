export default function (path, value, obj) {
  let object = {...obj};
  path.reduce((prev, current, currentIndex) => {
    if (currentIndex === path.length - 1) {
      prev[current] = value
      return object;
    }
    prev[current] = {};
    return prev[current];
  }, object )
  return object;
}
