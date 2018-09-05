// 原型链问题
function SuperType () {
  this.colors = ['red', 'blue', 'green']
}

function SubType () {
}

SubType.prototype = new SuperType()

var instance1 = new SubType()

instance1.colors.push('black')
