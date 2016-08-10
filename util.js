/**
 * 平时收集有用的util函数
 */

/**
 * @description 创建有初始值的数组
 */
Array.dim = function (dimension, initial) {
  var a = [], i;
  for (i = 0; i < dimension; i += 1) {
    a[i] = initial;
  }
  return a;
}