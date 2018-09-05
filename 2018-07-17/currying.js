// curry
const multiply = (n, m) => (n * m);
// console.log(multiply(3, 4) === 12) // true

const curryedMultiply = (n) => ((m) => multiply(n, m));
const triple = curryedMultiply(3)(4);
// console.log(triple);


// unCurry
const unCurryedMultiply = (n) => (m) => n * m;
// console.log(unCurryedMultiply(3)(4) === 12) // true

const unMultiply = (n, m) => unCurryedMultiply(n)(m);
// multiply = (n, m) => curryedMultiply(n)(m)
const res = unMultiply(3, 4);
// console.log(res);


const pMultiply = (n, m) => n * m;

const pTriple = (m, func) => {
  if (typeof func === 'function') {
    // TODO
    return func(m);
  }

  return pMultiply(3, m);
}

// pMultiply(3, m)

console.log(pTriple(4))
