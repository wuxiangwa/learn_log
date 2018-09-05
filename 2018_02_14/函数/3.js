// 简化原型访问的super 引用
let person = {
  getGreeting() {
    return "hello";
  }
};

let dog = {
  getGreeting() {
    return 'woof';
  }
};

let friend = {
  getGreeting() {
    // console.log(this === friend);
    // console.log(Object.getPrototypeOf(this).getGreeting());
    // return Object.getPrototypeOf(this).getGreeting.call(this) + ',hi!';
    return super.getGreeting() + ',hi!';
  }
};

// 将原型设置为person
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting());
