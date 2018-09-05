let person = ((name) => {
  return {
    getName: function() {
      return name;
    }
  };
})('nicholas');
console.log(person.getName());
// console.log(document);
let PageHandler = {
  id: '12345',
  init: function() {
    console.log(this);
    this.doSomething('hello'); //
  },
  doSomething: function(type) {
    console.log(type);
  }
}

PageHandler.init();

var sum = (num1, num2) => {
  console.log(num1, num2, arguments[0]);
  return num1 + num2
}
// var l = [1, 2]
console.log(sum.call(null, 1, 2));
