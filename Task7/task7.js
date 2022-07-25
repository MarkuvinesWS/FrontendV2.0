class MySet {
  constructor(array) {
    if (!Array.isArray(array)) throw new Error('Not an array');

    array.forEach((value) => {
      if (Object.values(this).some((valueOfThis) => valueOfThis === value)) return;
      this[this.getLastKey() + 1] = value;
      this.size = this.mySetKeys().length;
    });

    this[Symbol.iterator] = function () {
      let nextIndex = 0;
      const entries = this.mySetEntries();

      return {
        next: function () {
          return nextIndex < entries.length ?
            {value: {value: entries[nextIndex][1], key: entries[nextIndex++][0]}, done: false} :
            {done: true}
        }
      }
    };
  }

  mySetEntries() {
    const tempObj = {...this};
    delete tempObj.size;
    return Object.entries(tempObj);
  }

  mySetValues() {
    const tempObj = {...this};
    delete tempObj.size;
    return Object.values(tempObj);
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
    return this.mySetValues().map(value => [value, value])
  }

  forEach(callback) {
    this.mySetValues().forEach(callback)
  }

  has(item) {
    for (const {value} of this) {
      if (item === value) return true;
    }

    return false;
  }

  values() {
    return this[Symbol.iterator]()
  }
}


const mySet = new MySet([1, 2, 3, 4, 4, 5, 5]);
console.log(mySet);
mySet.add(6);
console.log(mySet);
mySet.delete(3);
console.log(mySet);
console.log(mySet.entries());
console.log(mySet.has(4));
mySet.clear()
console.log(mySet);
