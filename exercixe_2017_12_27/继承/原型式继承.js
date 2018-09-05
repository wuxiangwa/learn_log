function object (o) {
  function F () {

  }
  F.prototype = o
  return new F()
}

var person = {
  name: 'a',
  friends: [1,2,3,4,5]
}
var a1 = object(person)
a1.name = 'grep'
a1.friends.push('Rob')
var b1 = object(person)
b1.name = 'Linda'
b1.friends.push('hailun')


// Object.create()
var another = Object.create(person)
// console.log(another instanceo Object)
// console.log(another.name)

var another = Object.create(person, {
  name: {
    enumerable: true,
    writable: true,
    value: 'gred1'
  }
})
another.name = 'hailun'
for (var a in another) {
  console.log(a)
}
// console.log(another.name)
