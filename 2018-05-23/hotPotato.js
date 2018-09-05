const Queue = require('./queue');
function hotPotato (nameList, num) {
  let queue = new Queue(); // { 1 }

  for (let i = 0; i < nameList.length; i ++) {
    queue.enqueue(nameList[i]); // { 2 }
  }

  queue.print();
  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // { 3 }
    }
    queue.print();
    eliminated = queue.dequeue(); // { 4 }
    console.log(eliminated + ' 在击鼓传花游戏中被淘汰。');
  }
  return queue.dequeue(); // { 5 }
}

const names = ['john', 'jack', 'camila', 'ingrid', 'carl'];
const winner = hotPotato(names, 7);
// console.log(winner);
