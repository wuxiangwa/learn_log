function DoublyLinkedList () {
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  var length = 0;
  var head = null;
  var tail = null;

  // func
  this.append = function (element) { // 添加
    var node = new Node(element), current;
    if (head === null) {
      head = node;
      tail = node;
    } else {
      current = tail;
      current.next = node;
      node.prev = current;
      tail = node;
    }
    length++;  // 更新列表的长度
  };

  this.insert = function (position, element) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      var node = new Node(element), current = head, previous, index = 0;

      if (position === 0) { //在第一个位置添加
        if (!head) { // 新增的
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; // 新增的
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;
        previous.next = node;

        current.prev = node; // new add
        node.prev = previous; // new add
      }

      length ++;

      return true;
    } else {
      return false
    }
  }

  // 从任意位置移除元素
  this.removeAt = function (position) {
    // 检查越界
    if (position > -1 && position < length) {
      var current = head, previous, index = 0;

      // 移除第一项
      if (position === 0) {
        head = current.next;
        if (length === 1) { // 啥都没有了
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) { // 最后一项
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        current.next.prev = previous;
      }

      length --;
      return current.element;
    } else {
      return null;
    }
  };

  this.indexOf = function (element) {
    var current = head, previous, index = 0;
    // console.log('current:', current.next.prev);
    while (current) {
      if (element === current.element) {
        return index;
      }
      index ++;
      current = current.next;
    }

    return -1;
  };
}

var list = new DoublyLinkedList();

list.append(15);
list.append(10);
// // list.removeAt(0);
//
console.log(list.indexOf(15));
