function shuffle(array) {
  var _array = array.concat();
  for (var i = _array.length; i--; ) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }
  return _array;
}

console.log(shuffle([1,2,3,4,5,6,7,8]));
