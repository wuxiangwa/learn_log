//原生对象的类型
// console.log(Array.prototype.sort)
var a = new Array()
// console.log(a.constructor, Array.prototype.constructor)
// console.log(a.join)
var keys = Object.getOwnPropertyNames(a)
var key2s = Object.keys(a)
console.log(keys, key2s)

// 定义原生对象原型方法
// console.log(Object.getOwnPropertyNames(String.prototype))
// console.log(console)
String.prototype.startsWith = function (text) {
  console.log(text)
  return this.indexOf(text) == 0
}
// 实际生产过程中，并不介意这么做
var msg = 'hello world!'
console.log(msg.startsWith('ello '))
