function *createIterator() {
  let first = yield 1;
  let second;
  try {
    second = yield first + 2;
  } catch (ex) {
    second = 6;
  }
  yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.throw(new Error("Boom")));
console.log(iterator.next());



function run(taskDef) {
  // 创建一个无使用限制的迭代器
  let task = taskDef();

  // start
  let result =task.next();

  // 循环调用next()的函数
  (function step() {
    if (!result.done) {

      // 用一个promise 来解决会简化问题
      let promise = Promise.resolve(result.value);
      promise.then(value => {
        console.log("promise", value);
        result = task.next(value);
        step();
      }).catch(error => {
        result = task.throw(error);
        step();
      })
    }
  })()
}

function fetchData() {
  return function(callback) {
    return 1;
  };
}
run(function *() {
  let value = yield fetchData();
  console.log('function:', value);
  value = yield value + 3;
  console.log(value);
})
