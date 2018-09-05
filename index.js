var fibonacci = function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i <= 30; i ++) {
  console.log(i + ':', fibonacci(i));
}


// 1. es6 那个方法可以实现mixin功能
// vue 双向绑定  数据劫持 + 发布订阅模式 Object.defineProperty()
// 数据渲染  会先将跟节点el转换成文档碎片fragment(fragment添加原来的真实dom)    compileElement

// 发布者-订阅者模式（backbone.js）
//
// 脏值检查（angular.js）
//
// 数据劫持（vue.js）

// 1.说一下你了解CSS盒模型
// 你了解的弹性FLEX布局.
// 未知宽高元素怎么上下左右垂直居中
// DOM事件的绑定的几种方式 onfocus onclick  ondbclick drag
// webpack 压缩 webpack.optimize.UglifyJsPlugin
// target 和  currentTarget 区别 应用场景
// 函数柯里化
// 怎么获取一个元素到视图顶部的距离

// 内存泄露 有什么问题 你是如何解决的
function assignHandler() {
  var elment = document.getElementById('some');
  element.onclick = function () {
    alert(element.id);
  }
}
