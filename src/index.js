exports.min = function min(array) {
    return array !== undefined && array[0] !== undefined
      ? array.sort((a, b) => a - b)[0]
      : 0;
  };

  exports.max = function max(array) {
    return array !== undefined && array[0] !== undefined
      ? array.sort((a, b) => b - a)[0]
      : 0;
  };

  exports.avg = function avg(array) {
    return array !== undefined && array[0] !== undefined
      ? array.reduce((a, b) => a + b) / array.length
      : 0;
  };