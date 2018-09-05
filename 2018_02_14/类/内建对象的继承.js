function MyArray() {
  Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

let colors = new MyArray();
console.log(colors);
colors[0] = "red";
console.log(colors);
console.log(colors.length);

colors.length = 0;
console.log(colors);
