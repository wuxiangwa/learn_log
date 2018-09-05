function SuperType () {
  this.property = true;
}

SuperType.prototype.getValue = function() {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
  return this.subproperty;
}

var instance = new SubType();
console.log(instance.getValue());
console.log(instance.getSubValue());
