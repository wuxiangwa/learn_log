class MyClass {
  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

let instance = new MyClass();
let mi = instance.createIterator();
console.log(mi.next());
console.log(mi.next());
console.log(mi.next());

// function *createIterator() {
//   let first = yield 1;
//   let second = yield first + 2;
//   yield 3;
// }
// let mI = createIterator();
// console.log(mI.next());
// console.log(mI.next(2));
// console.log(mI.next(3));

class Collection {
  constructor() {
    this.items = [];
  }
  *[Symbol.iterator]() {
    // console.log(Object.is(this.items,Object.values(this.items)));
    yield *Object.values(this.items);
  }
}

let collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let i of collection) {
  console.log(i, collection)
}
