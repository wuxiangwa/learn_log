function factorial(n) {
  if (n <=1) {
    return 1;
  } else {
    // 无法优化
    return n * factorial(n-1);
  }
};

// 尾递归优化 可以大大提高程序的性能
function factoria2(n, p = 1) {
  if (n <= 1) {
    return 1 * p;
  } else {
    let result = n * p;
    return factoria2(n - 1, result);
  }
}
console.log(factoria2(5));
