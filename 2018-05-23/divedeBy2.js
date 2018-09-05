var Stack = require('./stack');

// 10进制转换
function baseConverter (decNumber, base) {
  var
  ®
  rem,
  baseString = '',
  digits = '0123456789ABCDEF'; // { 6 }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (! remStack.isEmpty()) {
    console.log(remStack.print());
    baseString += digits[remStack.pop()]; //  { 7 }
  }

  return baseString;
}
