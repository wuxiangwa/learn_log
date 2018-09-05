function Person () {
  Person.prototype.name = 'Nichotor'
  Person.prototype.age = 29
  Person.prototype.job = 'doctor'
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}

var person1 = new Person()

//构造函数需要被实力化才会显示
// var keys = Object.getOwnPropertyNames(Person.prototype)
// console.log(Person.prototype)
// console.log(Object.keys(Person.prototype)) //原型对象
// console.log(keys)
//
// person1.color = 'green'
// var keys1 = Object.keys(person1)
// console.log(keys1)


// person1.name = 'zhigang'//数据属性

// console.log(person1.hasOwnProperty('name'))

// console.log(Object.getOwnPropertyDescriptor(person1, 'name'))
person1.home = 'k11'
console.log(Person.prototype.constructor)
console.log(person1.constructor)
// var descriptot = Object.getOwnPropertyDescriptor(Person.prototype, 'name')
// console.log(descriptot.value)
// person1.name = 'zhigang.wu'
// console.log(person1.constructor)
// console.log(Person.prototype)
// console.log(person1)


// console.log(Person.prototype)
// console.log(Person.prototype.constructor)
// console.log(person1.name, Person.prototype.name)
//
// console.log(Person.prototype.isPrototypeOf(person1))
//
// console.log(Object.getPrototypeOf(person1))
// console.log(Person.prototype)
