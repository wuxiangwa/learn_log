// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

function Su(name) {
  this.name = name;
  this.colors = ['red'];
}

Su.prototype.sayName = function () {
  console.log(this.name);
}

function Sb(name, age) {
  SuperType.call(this, name); // 2
  this.age = age;
}
// new Su();
console.log(Su.prototype == Object(Su.prototype));
// let x = new Su();
// console.log(x.__proto__ === Su.prototype);
Sb.prototype = new Su();  // 1

function inherit(sb, su) {
  let prototype = Object(su.prototype);
  prototype.constructor = Sb;
  sb.prototype = prototype;
}

inherit(Sb, Su);
