class PersonClass {
  // 等价于PersonType构造函数
  constructor(name) {
    console.log(new.target);
    this.name = name
  }

  sayName() {
    console.log(this.name);
  }
}

let person = new PersonClass('Nicholas');
person.sayName();
console.log(typeof PersonClass.prototype.sayName);


let PersonType2 = (function() {
  'use strict';

  const PersonType2 = function(name) {
    // new
    if (typeof new.target === "undefined") {
      throw new Error("必须通过关键字new调用构造函数");
    }

    this.name = name;
  }

  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function() {
      // new
      if (typeof new.target !== "undefined") {
        throw new Error('error');
      }

      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

  return PersonType2;
}());

console.log(new PersonType2('hello world'));
