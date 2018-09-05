class Queue {
  constructor () {
    var items = [];
    this.enqueue = function (element) {
      items.push(element);
    }
    this.dequeue =  function () {
      return items.shift();
    }
    this.front = function () {
      return items[0];
    }
    this.isEmpty = function () {
      return items.length == 0;
    }
    this.clear = function () {
      items = [];
    }
    this.size = function () {
      return items.length;
    }
    this.print = function () {
      // console.log(items);
      console.log(items.toString());
    }
  }
}

var queue = new Queue();

queue.enqueue('john');
queue.enqueue('jack');
queue.enqueue('camila');

queue.print();
console.log(queue.size())
console.log(queue.isEmpty())
queue.dequeue();
queue.dequeue();
queue.print();
