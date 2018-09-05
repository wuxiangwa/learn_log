function PriorityQueue () {
  var items = [];

  function QueueElement (element, priority) { // { 1 }
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      console.log(queueElement);
      items.push(queueElement); // { 2 }
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement); // { 3 }
          added = true;
          break; // { 4 }
        }
      }

      if (! added) { // { 5 }
        item.push(queueElement);
      }
    }
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
    console.log(items); // .toString()
  }
}

var priorityQueue = new PriorityQueue();

priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('jack', 1);
priorityQueue.enqueue('camila', 1);

priorityQueue.print();
