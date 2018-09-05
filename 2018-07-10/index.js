var a = '<a 312312312>www.baidu.com</a>';
a = a.replace(/<a(.*?)<\/a>/g, (match) => {
  return match.replace(/<a(.*?)>/g, '').replace(/<\/a>/g, '')
})


function baz () {
  console.log('baz');
}
function bar () {
  baz();
}

function foo () {
  bar();
}

setTimeout(function() {
  console.log(1);
  foo();
}, 1)

setTimeout(function() {
  console.log(2);
  // for (let i = 0; i < 1000; i ++) {
  //   console.log(i);
  // }
  foo();
}, 2)

setTimeout(function() {
  console.log(3);
  foo();
}, 3)
