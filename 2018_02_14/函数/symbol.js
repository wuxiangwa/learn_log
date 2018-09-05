let uid = Symbol.for('uid');
let uid2 = Symbol.for('uid2');
let object = {
  [uid]: "12345",
  [uid2]: "123451"
}

let symbols = Object.getOwnPropertySymbols(object);
console.log(object[uid])

function demo() {
  console.log(Symbol,Symbol.hasInstance)
}

demo()

function SpecialNumber() {
  // 空函数
}

Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
  value: function(v) {
    console.log('value:', v, v instanceof Number, v instanceof Object);
    return (v instanceof Number) && (v >= 1 && v <= 100);
  }
})

var two = new Number(2);
// console.log(two);
console.log(two instanceof SpecialNumber)


// isConcatSpreadable 属性 symbol.isConcatSpreadable 为true,表示对象有length属性和数字键

// Symbol match、replace、search、split 属性
/**
* symbol.match
* symbol.replace
* symbol.search
* symbol.split
*/

// /&.{10}$/
let hasLengthOf10 = {
  [Symbol.match]: function(value) {
    return value.length === 10 ? [value] : null;
  },
  [Symbol.replace]: function(value, replacement) {
    // console.log(value, replacement);
    return value.length === 10 ? replacement : value;
  },
  [Symbol.search]: function(value) {
    return value.length === 10 ? 0 : - 1;
  },
  [Symbol.split]: function(value) {
    return value.length === 10 ? [, ] : [value];
  }
};

let message1 = "hello world", message2 = "hello John";

let match1 = message1.match('o'), match2 = message2.match(hasLengthOf10);

console.log(match1, match2);

let replace1 = message1.replace(hasLengthOf10), replace2 = message2.replace(hasLengthOf10, 'hello');

console.log(replace1, replace2);


// toPrimitive
console.log();

function Temperature(degrees) {
  // console.log('degrees:', degrees)
  this.degrees = degrees;
};

Temperature.prototype[Symbol.toPrimitive] = function(hint) {
  // console.log('toPrimitive:', hint, this);
  switch(hint) {
    case "string":
      return this.degrees + "\u00b0"; // degrees symbol
    case "number":
      return this.degrees;
    case "default":
      return this.degrees + " degreses";
  }
}

var freezing = new Temperature(32);
console.log(freezing + "!"); // 默认
console.log(freezing / 2);
console.log(String(freezing));


// toStringTag

function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}

console.log(isArray([]));

function Person(name) {
  this.name = name;
};
Person.prototype[Symbol.toStringTag] = 'Person';
var me = new Person('Nicholas');
console.log(me);
console.log(me.toString());

// unscopables 属性
