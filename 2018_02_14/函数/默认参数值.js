function mixArgs(first, second) {
  console.log(arguments);
  first = 'c';
  console.log(arguments);
}

mixArgs('a', 'b');
