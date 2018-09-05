class MyArray extends Array {

}

let items = new MyArray(1, 2, 3, 4), subitems = items.slice(1, 3);
console.log(items, subitems);

class MyClass {
  static get [Symbol.species]() {
    return this;
  }

  constructor(value) {
    this.value = value;
  }

  clone() {
    return new this.constructor[Symbol.species](this.value);
  }
}

class MyDerivedClass1 extends MyClass {

}

class MyDerivedClass2 extends MyClass {
  static get [Symbol.species]() {
    return MyClass;
  }
}

let instance1 = new MyDerivedClass1('foo'),
    clone1 = instance1.clone(),
    instance2 = new MyDerivedClass2('bar'),
    clone2 = instance2.clone();

console.log(clone1 instanceof MyClass);
console.log(clone1 instanceof MyDerivedClass1);
console.log(clone2 instanceof MyClass);
console.log(clone1 instanceof MyDerivedClass2);
