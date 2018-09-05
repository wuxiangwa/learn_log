let text1 = '吉a';
// console.log(text.length);
// console.log(/^.$/.test(text));
// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charCodeAt(0));
// console.log(text.charCodeAt(1));

console.log(text1.codePointAt(0));
console.log(text1.codePointAt(1));
console.log(text1.codePointAt(2));

function is32Bit (c) {
  console.log('0xFFFF:', 0xFFFF, c.codePointAt(0))
  return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit('𠮷'));
console.log(is32Bit('a'));


// codePointAt 一个字符占用的编码单元数量
// String.fromCodePoint 根据指定的码位生成一个字符
const  strJi = String.fromCodePoint(134071); // String.formCharCode();
console.log("strJi:", strJi)

const values = ['吉','b', 'g', '2', 'G', 'f', 'f']
// let normalized = values.map(function(text) {
//   console.log('text.normalize();:', text, text.normalize())
//   return text.normalize();
// })
let normalized = values
console.log('normalized:', normalized)
normalized.sort(function(first, second) {
  if (first < second) {
    return -1;
  } else if (first === second) {
    return 0;
  } else {
    return 1;
  }
});

console.log('normalized:', normalized)
// normalize 提供Unicode的标准形式 是我们能够更准确的比较多个字符串

// 正则表达式 u 修饰符 当一个正则表达式添加了u修饰符时，
// 它就从编码单元操作模式切换为字符模式

// 拓展 开发国际化的应用，normalize() 将会很有用
// 扩展 查看 BMP 中所有的字符
const str = '𠮷abc';   // 𠮷 俩个字符
console.log('𠮷abc', str.length)

// 创建一个支持unicode 且应用于全局的正则表达式

function codePointLength (text) {
  let result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

console.log(codePointLength(str));

// 检测当前引擎是否支持u 修饰符
function hasRegExpU () {
  try {
    // RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。
    const pattern = new RegExp('.', 'u');
    console.log(pattern);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
// 其他字符串 变更
'abc'.includes('a');
// console.log('abc', 'abc'.startsWith('abc'))
'abc'.includes('a');
// console.log('3'.repeat(3));
let text = 'hello1 hello2 hello3', pattern = /hello\d\s?/, result = pattern.exec(text), globalPattern = /hello\d\s?/g, globalResult = globalPattern.exec(text), stickyPattern = /hello\d\s?/y, stickyResult = stickyPattern.exec(text);
console.log(result);
console.log(globalResult);
console.log(stickyResult);
console.log(pattern.lastIndex);
console.log(globalPattern.lastIndex);
console.log(stickyPattern.lastIndex);

console.log();
console.log(pattern.sticky);
console.log(stickyPattern.sticky);
// console.log('abc'.lastIndex);
// lastIndex 属性用于规定下次匹配的起始位置
// y修饰符  正则表达式的一个扩展，它会影响正则表达式搜索过程中的sticky属性
// 检测当前引擎知否支持y修饰符

function hasRegExpY () {
  try {
    let pattern = new RegExp(".", "y");
    return true;
  } catch (e) {
    return false;
  }
}


// 正则表达式复制
let re1 = /ab/i;
re2 = new RegExp(re1, "g");
// console.log(re2);

function getFlags(re) {
  var text = re.toString();
  return text.substring(text.lastIndexOf("/") + 1, text.length);
}

console.log(getFlags(/ab/g));

let re = /ab/g;
console.log(re.source);
console.log(re.flags);

// 模版字面量



// 标签模版
function passthru(literals, ...substitutions) {
  console.log('passthru:', literals.raw, literals);
  let result = '';
  // 根据 substitution 的数量来确定循环的执行次数
  for (let i = 0; i < substitutions.length; i++) {
    result += literals.raw[i];
    result += substitutions[i];
  }
  // 合并最后一个literal
  result += literals.raw[literals.length - 1];
  return result;
}
let count = 10, price = 0.25, message = passthru`${count} items\n cost $${(count *price).toFixed(2)}.`

console.log(message);
