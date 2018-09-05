// 栈 后进先出
function Stack () {
  // 各种属性和方法的声明
  let items = [];
  this.push = function (element) {
    items.push(element);
  };
  this.pop = function () {
    return items.pop();
  };
  // 最后一个元素
  this.peek = function () {
    return items[items.length - 1];
  };
  this.isEmpty = function () {
    return Object.is(items.length, 0);
  };
  this.size = function () {
    return items.length;
  };
  this.clear = function () {
    items = [];
  };
  this.print = function () {
    console.log(items.toString());
    // console.log(items);
  }
}

var stack = new Stack();
// console.log(stack.isEmpty());
//
stack.push(5);
stack.push(8);
console.log(stack);
//
// stack.push(11);
// console.log(stack.size()); //
// console.log(stack.isEmpty()); //
//
// stack.push(15);
//
//
console.log(stack.pop());
// stack.pop();
// stack.pop();
// console.log(stack.size()); //
// stack.print();
module.exports = Stack
