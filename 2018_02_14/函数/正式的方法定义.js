let person = {
  // 方法
  getGreeting() {
    return 'HELLO';
  }
}

// not 方法
function shareGreeting() {
  return "hi";
}

let friend = {
  getGreeting() {
    return super.getGreeting() + ',hi!';
  }
}

Object.setPrototypeOf(friend, person);

console.log(friend.getGreeting());
