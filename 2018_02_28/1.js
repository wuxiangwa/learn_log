function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    // console.log(arguments.callee);
    return num * arguments.callee(num - 1);
  }
}

let anotherFactorial = factorial;
// console.log(anotherFactorial);
factorial = null;
// console.log(anotherFactorial);
anotherFactorial(4);

// 闭包
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar ( baz );
}

function bar(fn) {
  fn();
}

foo();
// console.log(foo);
// bar(1);
//
// var baz = foo();
// console.log(baz());

var name = '1';
var object = {
  name: "Mu",
  getName: function () {
    // console.log(this);
    var that = this;
    return function() {
      // console.log(this.name);
      return that.nrame;
    };
  }
}
console.log(object.getName()());
