//寄生构造函数模式  可以使用其他模式的情况优先使用其他模式
function SpecialArray () {
  //创建数组
  var values = new Array()
  // console.log(Object.getOwnPropertyNames(Array.prototype))
  //打印原型属性
  // console.log(Object.getOwnPropertyNames(values.push))
  //添加值
  // console.log(arguments, Array, Array.prototype.constructor)
  values.push.apply(values, arguments)
  // console.log('values', arguments, values)
  // console.log(Object.getOwnPropertyNames(values.__proto__))
  // 添加方法
  values.toPipedString = function () {
    return this.join('|')
  }

  //返回数组
  return values
}

var colors = new SpecialArray('red', 'bule', 'green')
// console.log('colors:', colors)
// console.log(SpecialArray.prototype)
// console.log(SpecialArray)
// console.log(Object.keys(colors.__proto__))


// 6.2.7 稳妥构造函数模式

function Person (name, age, job) {
  //创建要返回的对象
  var o = new Object()

  //可以在这里定义私有变量和函数
  o.newName = 'hailyn'
  //添加方法
  o.sayName = function () {
    console.log(name)
  }
  return o
}

var friends = Person('Nicholas', 29, 'soft Engineer')
friends.sayName()
console.log(friends.newName)
console.log(friends)

//注意 这俩种模式创建的对象与构造函数之间也没有什么关系  因此instanceof 操作符对这种对象也没有意义
