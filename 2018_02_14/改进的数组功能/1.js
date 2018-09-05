// Array.of 创建数组

// let items = new Array(2);
// console.log(items, items.length);

// function createArray(arrayCreater, value) {
//   return arrayCreater(value);
// }

// let items = createArray(Array.of, value);

// Array.from

function makeArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
}

function doSomething() {
  // var args = makeArray(arguments);
  var args = Array.from(arguments);
  return args;
}
console.log(doSomething());


// 映射转换
function translate() {
  // console.log(arguments);
  return Array.from(arguments, (value) => value + 1);
}


// 第三个参数映射转换
let helper = {
  diff: 1,
  add(value) {
    return value + this.diff;
  }
}

function translate() {
  return Array.from(arguments, helper.add, helper);
}

let numbers = translate(1, 2, 3);
console.log(numbers);

// Array 转换可迭代对象
let number2 = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

let number3 = Array.from(number2, (value) => value + 1);

console.log(number3);

let arr = [1, 2, 3];
// console.log(arr.findIndex(1));
console.log(arr.find( n => n > 1));

// 定型函数

// 数组缓冲区
let buffer = new ArrayBuffer(10); //分配10字节
console.log(buffer.byteLength);

function *demo() {
  yield 1;
  yield 2;
}
var a = demo();
console.log(a.next());
console.log(a.next());
console.log(a.next());
