// 字典

function Dictionary () {
  var items = {};

  this.has = function (key) {
    return key in items;
  }

  this.set = function (key, value) {
    items[key] = value;
  }

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true
    }
    return false;
  }

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  }

  this.values = function () {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  }

  this.getItems = function () {
    return items;
  }

  this.clear = function () {
    this.items = {};
  }

  this.size = function () {
    // this.length
    return Object.keys(items).length;
  }
}

var dictionary = new Dictionary();

dictionary.set('gandalf', 'gandalf@email.com')
dictionary.set('john', 'john@email.com')
dictionary.set('joker', 'joker@email.com')
dictionary.set('tyrion', 'tyrion@email.com')


console.log(dictionary.has('gandalf'))
console.log(dictionary.get('tyrion'))
console.log(dictionary.values())
console.log(dictionary.size())
