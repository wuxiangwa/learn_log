function SuperType () {
  this.propety = true
}

SuperType.prototype.getSuperValue = function () {
  return this.propety
}

function SubType () {
  this.subproperty = false
}

SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue())
