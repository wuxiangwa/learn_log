function SuperType() {
  // console.log('SuperType:',this);
  this.colors = ["red"];
}

function SubType() {
  console.log(this, SuperType);
  SuperType.call(this);
}

// console.log(SubType.colors);

var instance1 = new SubType();
// console.log(SubType.prototype.colors);
console.log(instance1.colors);
