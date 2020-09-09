/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-10 00:20:35
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const flatA = [];

  if (array == null || array === undefined) {throw 'Flatten undefined or null array';}

  if (array.length === 0) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) !== 'number') {
      for (let index = 0; index < array[i].length; index++) {
        flatA.push(array[i][index]);
      }
    } else {
      flatA.push(array[i]);
    }
  }
  return flatA;
}
