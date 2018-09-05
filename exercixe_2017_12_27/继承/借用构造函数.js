// 伪造对象 经典继承
function SuperType (name) {
  this.colors = ['red', 'blue', 'green']
  this.name = name
}

function SubType() {
  // 继承 superType
  // let xxx = new SuperType()
  // console.log(new Array() instanceof Object)
  SuperType.call(this, 'Nicholas')
  this.age = 29
}

function SubType2() {
  SuperType.call(this)
}

var instance = new SubType()

instance.colors.push('black')
console.log(instance.colors)
var instance2 = new SubType2()
console.log(instance2.colors)

//借用构造函数可以向超类型构造函数传递参数  很少单独使用
