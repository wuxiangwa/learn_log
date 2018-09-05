//原型对象的缺点
function Person () {

}

Person.prototype = {
  constructor: Person,
  name: 'JOker',
  age: 25,
  job: 'doctor',
  friends: ['shelby', 'Court']
}

var person1 = new Person()
var person2 = new Person()
person1.friends.push('Van')
console.log(person1.friends)
console.log(person2.friends)
