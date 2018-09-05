// const add = require('lodash/add');

var add = createMathOperation(function(augend, addend) {
  return augend * addend;
}, 0);

// 高阶函数
function createMathOperation (operator, defaultValue) {
  return function(value, other) {
    console.log(value, other);
    return operator(value, other);
  }
}

// console.log(add);
const a = add(5, 10); // 部分curry
console.log(a);
