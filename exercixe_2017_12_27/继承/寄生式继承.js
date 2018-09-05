function createAnother (original) {
  var clone = Object(original) //通过调用函数创建一个新对象
  clone.sayHi = function () {
    alert('hi')
  }
  return clone  //返回对象
}


var person = {
  name: 'a',
  friends: [1,2,3,4,5]
}
var anotherPerson = createAnother(person)
// console.log(anotherPerson instanceof Object)
