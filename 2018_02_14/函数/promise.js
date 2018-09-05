// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// })
// // console.log('hi');
//
// let thenable = {
//   then: function(resolve, reject) {
//     console.log(resolve, reject);
//     resolve(42);
//   }
// }
//
// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(value);
// })
//
//

// let p1 = new Promise(function(resolve, reject) {
//   resolve(42);
// });
// let p2 = new Promise(function(resolve, reject) {
//   reject(43);
// });
// p1.then(function(value) {
//   console.log(value);
//   return p2;
// }).then(null,function(error) {
//   console.log(error);
// })

class MyPromise extends Promise {
  success (resolve, reject) {
    // console.log('MyPromise:',this, Promise);
    return this.then(resolve, reject);
  }
  failure (reject) {
    return this.catch(reject);
  }
}


let p1 = new Promise(function(resolve, reject) {
  resolve(42);
})

let p2 = MyPromise.resolve(p1);
p2.then(function(value) {
  console.log(value);
})

p2.success(function(value) {
  console.log(value);
})

// function all(values) {
//   if (!Array.isArray([])) Promise.reject('error');
//
//   return new Promise((resolve, reject) => {
//     let len = values.length, result = [];
//     if (!len) {
//        resolve(result);
//        return
//     }
//
//     function doResolve(pm, index) {
//       Promose.resolve(pm).then(value => {
//         result[index] = value;
//         if (i + 1 === len) {
//           resolve(result);
//         }
//       }, reject)
//     }
//
//     for (let i = 0; i < len; i ++) {
//       doResolve(values[i], i)
//     }
//   })
// };

let res = new Promise((resolve, reject) => {
  // console.log()
   Promise.resolve(42).then(value => {
    // console.log('Promise:',value);
    resolve(value); // 完成状态了
    reject('error');
  })
  // console.log('Promise:',i);
})

res.then(value => {
  console.log('res:', value);
})
