module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(arr1, item, index, arr) {
    arr1.push(fn.call(thisArg, item, index, arr))
    return arr1;
  }, [])
}
