class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    console.log(this);
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
  getArea() {
    return super.getArea();
  }
}

var square = new Square(3);
// console.log(square);

// console.log(square.getArea());

let SerializableMixin = {
  serialize() {
    return JSON.stringify(this);
  }
};

let AreaMixin = {
  getArea() {
    return this.length * this.width;
  }
}

function mixin(...mixins) {
  var base = function() {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Square2 extends mixin(AreaMixin, SerializableMixin) {
  constructor(length) {
    super();
    this.length = length;
    this.width = length;
  }
}

let x = new Square2(3);

console.log(x.getArea());
console.log(x.serialize());
