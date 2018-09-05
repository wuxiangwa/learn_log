class A {
  // 変更前
  // 変更後
  constructor () {
    // this.method = this.method.bind(this);
  }
  static method () {
    // do something
  }

  dS () {
    console.log(this);
    // console.log(method);
    // this.method();
  }
}

var b = new A();
console.log(b);
b.dS()
