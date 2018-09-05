// 处理无命名参数
function pick(object, ...keys) {
  // console.log(object);
  let result = Object.create(null);
  // console.log(result);
  // console.log(arguments); //
  // console.log(keys);

  // 从第二个参数开始
  for (let i = 1, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]];
  }
  return result;
}

let book = {
  title: 'understanding ECMASCRIPT 6',
  author: 'Nicholas c',
  year: 2016
}

let bookData = pick(book, 'author', 'year');

// 不定参数


// object.assign()

function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function(key) {
    receiver[key] = supplier[key];
  })
  return receiver;
}

function EventTarget() {
}
EventTarget.prototype = {
  constructor: EventTarget,
  emit: function() {},
  on: function() {}
}

var myObject = {};
Object.assign(myObject, EventTarget.prototype);
console.log('myObject:', myObject);
// es6 中通过 Object.assign() 实现相同的功能  任何使用 mixin 的地方都可以使用 Object.assign() 方法来替换

//
var receiver = {}, supplier = {
  get name() {
    return 'file.js';
  }
}

Object.assign(receiver, supplier);
console.log(receiver.name);
console.log(supplier.name);

// 重复的对象字面量属性
var obj = {a: 1, 0: 1, c: 1, 2: 1, b: 1, 1: 1};
obj.d = 1;
console.log(Object.getOwnPropertyNames(obj).join(""));

// 增强对象原型

let person = {
  getGreeting() {
    return "hello";
  }
};

let dog = {
  getGreeting() {
    return 'woof';
  }
};

// 以person 对象为原型
let friend = Object.create(person);
console.log(friend.getGreeting(), Object.getPrototypeOf(friend), person);

// 将原型设置为dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting(), Object.getPrototypeOf(friend), dog);
