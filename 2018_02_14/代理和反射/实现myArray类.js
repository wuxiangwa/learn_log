class Thing {
  constructor() {
    return new Proxy(this, {});
  }
}

let myThing = new Thing();
console.log(myThing instanceof Thing);

function toUint32(value) {
  return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
}

function isArrayIndex(key) {
  let numbericKey = toUint32(key);
  return String(numbericKey) === key && numbericKey < (Math.pow(2, 32) - 1);
}

class MyArray {
  constructor(length=0) {
    this.length = length;

    return new Proxy(this, {
      set(trapTarget, key, value) {
        let currentLength = Reflect.get(trapTarget, "length");

        // 特殊情况
        if (isArrayIndex(key)) {
          let numbericKey = Number(key);

          if (numbericKey >= currentLength) {
            Reflect.set(trapTarget, "length", numbericKey + 1);
          }
        } else if (key === "length") {
          if (value < currentLength) {
            for (let index = currentLength - 1; index >= value; index --) {
              Reflect.deleteProperty(trapTarget, index);
            }
          }
        }

        //
        return Reflect.set(trapTarget, key, value);
      }
    })
  }
}

let colors = new MyArray(3);
console.log(colors);
