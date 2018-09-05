//重写对象原型

function Person () {
}

var person1 = new Person()
// console.log(Person.prototype)

// console.log(person1.constructor.prototype, Person.prototype.constructor)

Person.prototype = {
  constructor: Person, //可枚举   见2中defineProperty 可修改为不可枚举
  name: 'zhigang.wu',
  sayName: function () {
    console.log('person2')
  }
}
var person2 = new Person()
// console.log(Person.prototype)
console.log(Object.getPrototypeOf(person1))
console.log(Object.getPrototypeOf(person2))
console.log(person1.constructor.prototype)
console.log(person2.constructor.prototype)
// person1.sayName()
// person2.sayName()
