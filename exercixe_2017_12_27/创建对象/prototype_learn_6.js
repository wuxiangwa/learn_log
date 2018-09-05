//组合使用构造函数模式和原型模式  目前使用最广泛 认同度最高的一种创建自定义类型的方法
function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['shelby', 'court']
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name)
  }
}

var person1 = new Person('Nicholas', 29, 'soft engineer')
var person2 = new Person('Greg', 27, 'doctor')
// console.log(Object.getPrototypeOf(person1)) //获取实例person1的原型对象)
// console.log(person1.__proto__)  //person1.__proto__ 原型对象 内部属性 指向Person.prototype
// console.log(person1.__proto__.constructor)
// console.log(Person.prototype.constructor) //都指向到自己
