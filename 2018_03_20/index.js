var num = 0;
// 错误的方法  做了很多无谓的工作 函数被调用次数疯狂提高
var fibonacci2 = function(n) {
  return n < 2 ? n : fibonacci2(n - 1) + fibonacci2(n - 2);
}

// 记忆  减少函数的调用
var fibonacci = function() {
  var memo = [0, 1];
  var fib = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    };
    return result;
  }
  return fib;
}();


// var memoizer = function (memo, formula) {
//     var recur = function (n) {
//       var result = memo[n];
//       if (typeof result !== 'number') {
//         result = formula(recur, n);
//         memo[n] = result;
//       }
//       return result;
//     };
//     return recur;
// }



for (let i = 0; i <= 10; i++) {
  console.log(i + ':', fibonacci(i));
}
