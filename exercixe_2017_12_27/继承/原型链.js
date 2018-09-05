// 原型链 基本思想 利用原型让一个引用类型继承另外一个引用类型的属性和方法

function SuperType () {
  this.propety = true
}

SuperType.prototype.getSuperValue = function () {
  return this.propety
}
// console.log(SuperType.prototype)
function SubType () {
  this.subproperty = false
  // this.property = true
}

//继承了superType
SubType.prototype = SuperType.prototype
// console.log(SubType.prototype.propety)
console.log(SuperType.prototype)
// console.log(SubType.prototype)
SubType.prototype.getSubValue = function () {
  return this.subproperty
}
var instance = new SubType()
// console.log(instance.getSuperValue())
console.log('(:',
SubType.prototype)
console.log(SuperType.prototype)
console.log(instance.constructor)
