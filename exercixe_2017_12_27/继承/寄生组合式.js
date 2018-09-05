function SuperType (name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType (name, age) {
  SuperType.call(this, name)
  this.age = age
}
function inhearitPrototype (subType, superType) {
  var prototype = Object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

inhearitPrototype(SubType, SuperType)

var a = new SubType('joker', 25)
var b = new SubType('joker', 24)
console.log(a)
console.log(b)
console.log(a)

//引用类型最理想的继承范式
