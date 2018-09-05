function createIterator(items) {
  var i = 0;
  return {
    next: function() {
      var done = (i >= items.length);
      var value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value
      };
    }
  };
}

var iterator = createIterator([1, 2, 3])
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function *createIterator2() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator2 = createIterator2();
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

// let values = [1, 2 ,3];
// values[Symbol.iterator] = function *() {
//   for (let i = 0; i < this.length; i++) {
//     yield this[i]*10;
//   }
// };

// console.log(values);
// for (let num of values) {
//   console.log(num);
// }

// console.log(typeof values[Symbol.iterator])

// 创建可迭代的对象
let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
// console.log(collection.items[Symbol.iterator])

for (let i of collection) {
  console.log(i);
}

let colors = ['red', 'green', 'blue'];
let colors2 = ['red', 'green', 'blue'];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set('title', "understanding ECMASCRIPT 6");
data.set('format', "ebook");

for (let entry of colors.entries()) {
  console.log(entry);
}
console.log();
for (let entry of tracking.entries()) {
  console.log(entry);
}

for (let entry of data.entries()) {
  console.log(entry);
}

console.log();


for (let entry of Object.values(colors)) {
  console.log(entry);
}
console.log();
for (let entry of tracking.values()) {
  console.log(entry);
}
console.log();
for (let entry of data.values()) {
  console.log(entry);
}

console.log();
for (let entry of colors.keys()) {
  console.log(entry);
}
console.log();
for (let entry of tracking.keys()) {
  console.log(entry);
}
console.log();
for (let entry of data.keys()) {
  console.log(entry);
}
