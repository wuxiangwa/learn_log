
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [0, 1, 2];
var b = [...arr1]
arr1.push(4)
var a = arr1

var c = arr1.concat()

// console.log(arr1.__proto__.constructor, a.__proto__.constructor, b.__proto__.constructor)
console.log(a == b)
// console.log(arr1.__proto__.constructor == a.__proto__.constructor)
console.log(a == arr1)
console.log(b == arr1)
console.log(c == arr1)
