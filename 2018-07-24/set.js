// 集合


class RangeIterator  {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  [Symbol.iterator]() { return this; }

  next() {
    return this.index < this.items.length ?
        {value: this.items[this.index++]} :
        {done: true};
  }
}

class FF {

}

class mySetClass extends FF {
  constructor (items = {}) {
    super();
    this.items = items;
    this.length = 0;
  };

  has (value) {
    return this.items.hasOwnProperty(value);
  }

  add (value) {
    if (! this.has(value)) {
      this.items[value] = value;


      this.length += 1;

      return true;
    }
    return false;
  }

  entries () {
    // console.log(this);
    return new RangeIterator(this.items);
  }

  remove (value) {
    if (this.has(value)) {
      this.items[value] = value;
      delete this.items[value];

      this.length -=1;
      return true;
    }
    return false;
  }

  clear () {
    this.items = {};
  }

  size () {
    // this.length
    return Object.keys(this.items).length;
  }

  values () {
    return Object.keys(this.items);
  }

  valuesLegacy () {
    let keys = [];
    for(let key in items) {
      leys.push(key);
    }
    return keys;
  }

  sizeLegacy () {
    let count = 0;
    for (let prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        ++count;
      }
    }

    return count;
  }


  // 并集
  union (otherSet) {
    let unionSet = new Set(), values = this.values();
    for (let i = 0; i < values.length; i ++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  // 交集
  intersection (otherSet) {
    let intersectionSet = new Set(), values = this.values();
    for (let i = 0; i < values.length; i ++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  // 差集
  difference (otherSet) {
    let differenceSet = new Set(), values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (! otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet;
  }

  // 子集
  subset (otherSet) {
    if (this.size() > otherSet.size()) { // A > other
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (! otherSet.has(values[i])) {
          return false
        }
      }

      return true;
    }
  }
}




const setA = new mySetClass([1, 1, 2, 3]);
console.log(setA);

// setA.add(1);
// setA.add(2);
// setA.add(3);
//
// const setB = new mySetClass();
// setB.add(1);
// setB.add(2);
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
//
// const unionAB = setA.union(setB);
// const intersectionAB = setA.intersection(setB);
// const differenceAB = setA.difference(setB);
// const subsetAB = setA.subset(setB);
//
// console.log(unionAB.values());
// console.log(intersectionAB.values());
// console.log(differenceAB.values());
// console.log(subsetAB);



//
// const IteratorA = new RangeIterator(0, 3);


// let iterable = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//   console.log(item); // 'a', 'b', 'c'
// }
