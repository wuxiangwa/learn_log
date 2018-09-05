var render = function (tpl, data) {
  return tpl.replace(/\{\{(.+?)\}\}/g, (match, p1) => { // p1 代表第n个括号匹配的自渡船
    return data[p1]
  })
}

const res = render(`我是{{name}}, 年龄{{age}}`, {name: 'zhigang', age: 19});

// '$1,'
const res2 = '1234567891'.replace(/(\d+?)(?=(\d{3})+$)/g, (match, p1) => {
  console.log(match, p1); // $1 p1
  return `${match},`;
}); // 1 匹配所有数组
// const res2 = '1234567891'.replace(/(\d+?)(?=(\d{3})+$)/g, (match, p1) => {
//   console.log(match, p1);
// }); // 1 匹配所有数组 (?=(\d{3})+$)
console.log(res2);

//
// var string = '我的账户余额： 2，235，467.20';
// const price = new Number(string.replace(/[^0-9.]/g, ''));
// console.log(typeof price);


function bindData (target, event) {
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      (function() {
        var v = target[key];
        Object.defineProperty(target, key, {
          get: function () {
            return v;
          },
          set: function (_value) {
            v = value;
            event.call(this);
          }
        })
      })()
    }
  }
}
