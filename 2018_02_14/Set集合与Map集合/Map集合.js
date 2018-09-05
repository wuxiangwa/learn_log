let map = new Map([["name", 'joker']])
console.log(map)

// WeakMap 可以使用对象作为键值
// function Person(name) {
//   this._name = name;
// }
//
// Person.prototype.getName = function() {
//   return this._name;
// }
//
// let person = new Person("joker");
// console.log(person.getName());

var Person = (function() {
  // let privateData = {}, privateId = 0;
  let privateData = new WeakMap();
  function Person(name) {
    // Object.defineProperty(this, "_id", {value: privateId++});
    // privateData[this._id] = {
    //   name
    // };
    privateData.set(this, { name });
  };


  Person.prototype.getName = function() {
    return privateData.get(this).name;
  }
  return Person;
}());
var person = new Person("hello");
var person2 = new Person("hell2");

console.log(person.getName(), person2.getName(), person === person2);
