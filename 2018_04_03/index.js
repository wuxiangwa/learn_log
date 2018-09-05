// var contructor = function (spec, my) {
//   var that;
//   my = my || {};
//   //
//   that = {};
//   return that;
// }



arr = [ {id: 1, arr: [{id: 2}]}]
const id = 2;


// function generateRoutesFromMenu (menu = [], routes = []) {
//   for (let i = 0, l = menu.length; i < l; i++) {
//     let item = menu[i]
//     if (item.path) {
//       routes.push(item)
//     }
//     if (!item.component) {
//       generateRoutesFromMenu(item.children, routes)
//     }
//   }
//   return routes
// }
const demo = (arr = [], routes =[]) => {
  for( let i = 0, l = arr.length; i < l; i ++) {
      let item = arr[i];
      if (item.id != id) {
        demo(item.arr, routes);
      } else {
        console.log(item);
        // routes.push(item)
      }
  }
  return routes;
}

console.log(demo(arr))
