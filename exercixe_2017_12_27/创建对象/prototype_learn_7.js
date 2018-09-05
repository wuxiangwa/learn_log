//动态原型模式  instanceof 查看知识点
function Person (name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  // 方法
  console.log(typeof this.job)
  console.log(this)
  // instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上

  console.log(this instanceof Object)
  if (typeof this.sayName != 'function') {
    Person.prototype.sayName = function () {
      console.log(this.name)
    }
  }
}

var person1 = new Person('Nicholas', 29, 'software Engineer')

person1.sayName()
// console.log(person1 instanceof Person)
