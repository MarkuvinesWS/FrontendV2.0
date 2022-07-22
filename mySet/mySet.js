function iterator (array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true}
    }
  }
}
class MySet {
  constructor(array) {
    if (!Array.isArray(array)) throw new Error('Not an array');
    array.forEach((value) => {
      if (Object.values(this).some((valueOfThis) => valueOfThis === value )) return;
      this[this.getLastKey() + 1] = value;
      this.size = this.mySetKeys().length;
    })
    this[Symbol.iterator] = function () {
      let nextIndex = 0;
      const values = this.mySetValues();
      const keys = this.mySetKeys();
      return {
        next: function () {
          return nextIndex < values.length ?
            { value: { value: values[nextIndex], key: keys[nextIndex++] }, done: false } :
            { done: true }
        }
      }
    };
  }
  mySetValues() {
    const obj = Object.values(this);
    obj.pop();
    return obj;
  }
  mySetKeys() {
    const obj = Object.keys(this);
    obj.pop();
    return obj;
  }
  getLastKey() {
    const keys = this.mySetKeys();
    if (keys.length === 0) return -1;
    return +keys[keys.length - 1];
  }
  add(value) {
    if (this.mySetValues().some(item => item === value)) return false;
    this[this.getLastKey() + 1] = value;
    this.size += 1;
    return true;
  }
  clear() {
    for (const key in this) {
      if (key === 'size') {
        this.size = 0;
        return;
      }
      delete this[key]
    }
  }
  delete(value) {
    const entries = Object.entries(this);
    entries.pop();
    entries.forEach((item, index) => {
      if (value === item[1]) {
        delete this[item[0]];
        for (let i = index; i < this.mySetKeys().length - 1; i++) {
            this[i] = this[i + 1];
            delete this[i + 1]
          }
      }
    })
    this.size -= 1;
  }
  entries() {
    return  this.mySetValues().map(value => [value, value])
  }
  forEach(callback) {
    this.mySetValues().forEach(callback)
  }
  has(item) {
    for (const {value} of this) {
      if (item === value) return true;
    }
    return false;
    // return this.mySetValues().includes(value);
  }
  values() {
    return this[Symbol.iterator]()
  }
}


const mySet = new MySet([1, 2, 3, 4, 4, 5, 5])
// console.log(mySet[Symbol.iterator].next());
// console.log(mySet[Symbol.iterator].next());
for (const value of mySet) {
  console.log(value);
}
// console.log(mySet);
console.log(mySet.has(5));
console.log(mySet.has(10));
const iter = mySet.values();
console.log(iter.next())
// mySet.forEach((item, index, set) => {
//   console.log(item, index, set)})
// let iterator = mySet.entries();
//
// for (const entry of iterator) {
//   console.log(entry);
// }
// mySet.delete(4);
// console.log(mySet);
// mySet.delete(1);
// console.log(mySet);
// mySet.delete(5);
// console.log(mySet);
// mySet.add(5);
// console.log(mySet);
// mySet.clear();
// console.log(mySet);
// mySet.add(5);
// console.log(mySet);
// mySet.add(1);
// console.log(mySet);
// iterator = mySet.entries();
//
// for (const entry of iterator) {
//   console.log(entry);
// }
// mySet.forEach((item, index, set) => {
//   console.log(item, index, set)})
//

