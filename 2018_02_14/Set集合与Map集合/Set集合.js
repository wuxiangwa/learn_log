let set = new Set();
set.add(5);
set.add("5");
console.log(set instanceof Set);
console.log([...set]);
console.log([...new Set([1,1,2,2,3,3])]);
console.log();

set = new Set([1, 2]);
set.forEach((value, key, ownerSet) => {
  console.log(value, key, ownerSet, set);
})

let processor = {
  output(value) {
    console.log(value);
  },
  process(dataSet) {
    console.log(dataSet);
    dataSet.forEach(value => {
      this.output(value);
    });
  }
};

processor.process(set);


// 弱引用 WeakSet 不接受原始值 会抛出错误

let set1 = new WeakSet([{}, {}]);
// console.log([...set1]);
