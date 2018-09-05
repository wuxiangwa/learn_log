function Person () {

}

Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'doctor',
  sayName: function () {
    console.log(this.name)
  }
}

var person1 = new Person()
console.log(Person.prototype.constructor)
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
})

console.log(Person.prototype.constructor)
// console.log(Object.getPrototypeOf(person1))
// console.log(person1.constructor)
// console.log(Person.prototype === Object.getPrototypeOf(person1))
