// for 语句
// 1 常见
// 2 for in 语句
function Graph() {
  this.vertices = 1;
  this.edges = 2;
}

Graph.prototype = {
  addVertex: 3
};

let obj = new Graph();

obj.c = 3;
for (item in obj) {
  // 判断对象是否具有自己定义的属性 非原型属性
  if (obj.hasOwnProperty(item)) {
    console.log(`hasOwnProperty: ${item}`);
  } else {
    console.log(`notHasOwnProperty: ${item}`);
  }
}
