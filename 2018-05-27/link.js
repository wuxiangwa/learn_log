function LinkList () {
  var Node = function (element) { // { 1 }
    this.element = element;
    this.next = null;
  }

  var
  length = 0,  // { 2 }
  head = null; // { 3 }

  this.append = function (element) {
    var
    node = new Node(element), // { 1 }
    current; // { 2 }

    if (head === null) { // 列表中的第一个节点 // { 3 }
      head = node;
    } else {
      current = head; // { 4 }

      // 循环列表， 知道找到最后一项
      while (current.next) {
        current = current.next;
      }

      // 找到最后一项，将其next赋为node，建立链接
      current.next = node; // { 5 }
    }
    length++; // 跟新列表的长度 // { 6 }
  };
  this.insert = function (position, element) {};
  this.removeAt = function (position) {
    // 检查越界值
    if ( position > -1 && position < length ) { // { 1 }
      var current = head, // { 2 }
          previous, // { 3 }
          index = 0; // { 4 }

      // 移除第一项
      if (position === 0) { // { 5 }
        head = current.next;
      } else {
        while (index++ < position) { // { 6 }
          previous = current; // { 7 }
          current = current.next; // { 8 }
        }

        // 将previous 与 current 的下一项链接起来： 跳过current, 从而移除它

        previous.next = current.next; // { 9 }
      }

      length --; // { 10 }
      return current.element;
    } else {
      return null; // { 11 }
    }
  };
  this.remove = function (element) {};
  this.indexOf = function (element) {};
  this.isEmpty = function () {};
  this.size = function () {};
  this.toString = function () {};
  this.print = function () {
    console.log(length);
    console.log(head);
  };
}

var list = new LinkList();
// console.log(list);
list.append(15);
list.append(10);
list.print();
