async function asyncTimeout (timeout) {
  return new Promise(( resolve ) => setTimeout(() => { resolve() }, timeout))
}

setTimeout(() => console.log(3), 2000);

console.log(1);

asyncTimeout(1000).then(() => console.log(2));
