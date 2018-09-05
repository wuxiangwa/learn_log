function Person() {
};

Person.prototype.name = 'a';
Person.prototype.sayName = function () {
  console.log(this.name);
}

let person1 = new Person();

// constructor 保存了指向 function 的一个引用
console.log(Person.prototype.constructor === Person)
console.log(Person.prototype.constructor)
console.log(Person.constructor)
console.log(Person.prototype, person1.__proto__ === Person.prototype)
