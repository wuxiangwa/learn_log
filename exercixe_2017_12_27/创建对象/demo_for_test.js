import { isEqual } from lodash;
const isEqualArray = (array, array2) => {
  // if the other array is a falsy value, return

  if (!array || !array2) return false;

  if (array2.length !== array.length) return false;

  for (var i = 0, l = array.length; i < l; i++) {
    // Check if we have nested arrays

    if (array[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!isEqualArray(array[i], array2[i])) return false;
    } else if (array[i] instanceof Object && array2[i] instanceof Object) {
      if (!isEqual(array[i], array2[i])) return false;
    } else {
      if (array[i] !== array2[i]) return false
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
    }
  }
  return true;
}

const totalEqual = (nextData, data) => {
  if (!nextData) return true;
  if (nextData && !data) return false;
  if (nextData && data) {
    for(let i in data) {
      if (data[i] instanceof Array && nextData[i] instanceof Array) {
        for (let count = 0; count < data[i].length; count ++) {
          if (data[i][count] instanceof Array && nextData[i][count] instanceof Array) {

          } else if (data[i][count] instanceof Object && nextData[i][count] instanceof Object) {
            if (!totalEqual(data[i][count], nextData[i][count])) return false
          } else {
            if (data[i][count] !== nextData[i][count]) return false;
          }
        }
      } else if (data[i] instanceof Object && nextData[i] instanceof Object) {
        if (!isEqual(data[i], nextData[i])) return false;
      } else  {
        if (nextData[i] !== data[i]) return false;
      }
    }
  }
  return true;
}
