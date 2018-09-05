// var adder = {
//   base: 1,
//   add: function (a) {
//     console.log(this);
//   }
// }
//
// function adder2 () {
//   // console.log('adder2:', this);
//   function adder3() {
//     // console.log('adder3:', this);
//   }
//
//   adder3();
// }
// console.log(this);
//
// // adder.add(2);
// adder2();

const a = 1;
switch (a) {
  case 1:
    const a = 2;
    console.log(a);
    break
  case 2:
    const a = 3;
    break
  default:
    break

}


console.log(a);
