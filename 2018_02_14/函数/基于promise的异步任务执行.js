let fs = require("fs");

function run(taskDef) {
  // 创建可以在其他地方使用的迭代器
  let task = taskDef();


  // 开始执行任务
  let result = task.next();


  // 不断调用next()的递归函数
  (function step() {
    console.log(result);
    if (!result.done) {
      // 用一个promise 来解决会简化问题
      console.log('step:1', result.value);
      let promise = Promise.resolve(result.value);
      promise.then(value => {
        console.log('step:2', value);
        result = task.next(value);
        step();
      }).catch(error => {
        console.log('step:3', error);
        result = task.throw(error);
        step();
      })
    }
  })();
}

// 定义一个可用于任务执行器的函数
function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });
}

// 执行一个任务
run(function*() {
  let contents = yield readFile('http://assets-xiangwang.oss-cn-hangzhou.aliyuncs.com/bulma.css');
  // doSomethingWith(contents);
  // console.log(contents);
  console.log("Done");
})
