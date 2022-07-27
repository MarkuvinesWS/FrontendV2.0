class MySet {
  constructor(array) {
    Object.defineProperty(this, 'size', { enumerable: false, writable: true })
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
            { value: {value: entries[nextIndex][1], key: entries[nextIndex++][0]}, done: false } :
            { done: true }
        }
      }
    };
  }

  mySetEntries() {
    return Object.entries(this);
  }

  mySetValues() {
    return Object.values(this);
  }

  mySetKeys() {
    return Object.keys(this);
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
      delete this[key]
    }
    this.size = 0;
  }

  delete(value) {
    const entries = this.mySetEntries();
    entries.forEach((item, index) => {
      if (value === item[1]) {
        delete this[item[0]];
        for (let i = index; i < this.mySetKeys().length; i++) {
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


const mySet = new MySet([ 1, 2, 3, 4, 5 ]);
