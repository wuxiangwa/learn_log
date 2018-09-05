// 链表
function LinkedList () {
  var Node = function (element) { // {1}
    this.element = element;
    this.next = null;
  };

  var length = 0; // {2}
  var head = null; // {3}

  this.append = function (element) { // 添加
    var node = new Node(element), current;

    if (Object.is(head, null)) {
      head = node
    } else {
      current = head;

      // 循环列表， 直到找到最后一项
      while (current.next) {
        current = current.next;
      }

      // 找到最后一项， 将其next赋为node，建立链接
      // console.log(current);
      current.next = node;
    }

    length++;  // 更新列表的长度
  };  // 尾部添加
  this.insert = function (position, element) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      var node = new Node(element), current = head, previous, index = 0;
      if (position === 0) { // 在第一个位置添加
        node.next = current;
        head = node;
      } else {
        while (index++ < postion) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length ++;
      return true;

    } else {
      return false;
    }
  }; // 特定位置添加
  this.removeAt = function (position) {

    // 检查越界值
    if (position > -1 && position < length) { // {1}
      var current = head, previous, index = 0; // {2, 3, 4}

      //移除第一项
      if (position === 0) {
        head = current.next;
      } else {

        while (index++ < position) { // {6}
          previous = current;
          current = current.next;
        }

        // 将previous和current的下一项链接起来： 跳过current, 从而移除它
        previous.next = current.next;
      }

      length --; // {}
      return current.element;
    } else {
      return null;
    }

  }; // 从列表的特定位置移除一项
  this.remove = function (element) {
    var iindex = this.indexOf(element);
    return this.removeAt(index);
  };  //列表其中移除
  this.indexOf = function (element) {
    var current = head, index = 0;
    console.log(current);
    while (current) {
      if (element === current.element) {
        return index;
      }
      index ++;
      current = current.next;
    }

    return -1;
  }; // 返回元素在列表中的索引
  this.isEmpty = function () {
    return length === 0;
  }; // 如果列表中不包含任何元素，返回true 否则返回false
  this.size = function () {
    return length;
  }; // 返回列表包含的元素个数
  this.toString = function () {
    var current = head, string = '';
    while (current) {
      string += "，" + current.element;
      current = current.next;
    }

    return string.slice(1);
  }; // 输出元素的值

  this.getHead = function () {
    return head;
  };
  this.print = function () {};
}

// console.log(Node);
var list = new LinkedList();

list.append(15);
list.append(10);
list.insert(0, 9); // 指定位置插入
// list.removeAt(0);

console.log(list.indexOf(9));
