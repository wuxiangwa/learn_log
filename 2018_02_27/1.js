function createPerson (name, age, job) {
  // let o = new Object();
  console.log(this, createPerson.prototype);
  this.name = name;
  this.age = age;
  this.job = job;
  console.log(this);
  this.sayName = function () {
    console.log(this);
    console.log(this.name);
  }
}

let person = new createPerson('n', 29, 'soft');
person.sayName('hello');
