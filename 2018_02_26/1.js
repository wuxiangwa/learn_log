var i = 0;
do {
  i += 2;
} while (i < 10);

var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j ++) {
    console.log(i, j)
    if (i == 5 && j == 5) {
      console.log(i, j)
      continue outermost;
    }
    num ++;
  }
}
// console.log(num);

// 迭代方法

var numbers = [ 1, 2, 3, 4];
let res = numbers.every((item, index, array) => item > 2);
let res2 = numbers.some((item, index, array) => item > 2);
let res3 = numbers.filter((item, index, array) => item > 2);
let res4 = numbers.map((item, index, array) => {
  if (item > 2) {
    return item;
  } else {
    return false;
  }
});
let res5 = numbers.forEach((item, index, array) => item > 2);
// console.log(res, res2, res3, res4, res5);


// reduce reduceRight
let sum = numbers.reduce((prev, cur, index, array) => prev + cur);
// console.log(sum);

//

var someDate = new Date(Date.parse("May 25, 2004"));
// console.log(someDate, Date.parse());

function dem1(num) {
  if ( num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num -1);
  }
}

console.log(dem1(19));
