function recursion(a, b, m, n) {
  if (m === 0) {
    return n
  } else if (n === 0) {
    return m
  } else {
    let d1 = recursion(a, b, m - 1, n) + 1
    let d2 = recursion(a, b, m, n - 1) + 1
    let d3 = recursion(a, b, m - 1, n - 1) + 1
    return Math.min(d1, d2, d3)
  }
}


console.log(recursion('1234567', '134053', 7, 6));
