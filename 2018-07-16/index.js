const clone = require('lodash/clone');
const cloneDeep = require('lodash/cloneDeep');
// const arr = [
//   {id: 1, name: 'joker1'},
//   {id: 2, name: 'joker2'},
//   {id: 3, name: 'joker3'},
//   {id: 4, name: 'joker4'}
// ];
//
// let item = _.find(arr, {id: 1});
// console.log(arr[0] === item);
//
// item = {
//   ...item,
//   name: 'joker_update'
// }
//
// // item.name = 'joker_update';
//
// console.log(arr[0] === item);
//
// console.log(item, arr);


// 判断 是 数组 还是 对象
// function cloneDeep
// function cloneDeep(val, instanceClone) {
//   switch (typeOf(val)) {
//     case 'object':
//       return cloneObjectDeep(val, instanceClone);
//     case 'array':
//       return cloneArrayDeep(val, instanceClone);
//     default: {
//       return clone(val);
//     }
//   }
// }


// function cloneObjectDeep(val, instanceClone) {
//   if (typeof instanceClone === 'function') {
//     return instanceClone(val);
//   }
//   if (typeof val === 'object') {
//     const res = new val.constructor();
//     for (const key in val) {
//       res[key] = cloneObjectDeep(val[key], instanceClone);
//     }
//     return res;
//   }
//   return val;
// }
//
//
// function cloneArrayDeep(val, instanceClone) {
//   const res = new val.constructor(val.length);
//   for (let i = 0; i < val.length; i++) {
//     res[i] = cloneArrayDeep(val[i], instanceClone);
//   }
//   return res;
// }
//
//
const object = {a: {
  d: 'e',
  f: 'g'
}, c: 'd'};

// const b = cloneDeep(object);
// const a = clone(object);
// a = object;
// console.log(a === object);
// console.log(Object.is(b, object));
// const objects = [{ 'a': 1 }, { 'b': 2 }]
// const a = clone(objects);
// const b = cloneDeep(objects);
// const b = _.cloneDeep(objects)
// console.log(b);

// console.log(a === objects)
// console.log(b === objects)
// console.log(a[0] === objects[0])
// console.log(b[0] === objects[0])
