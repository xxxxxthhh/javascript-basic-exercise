/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 23:46:19
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

  let levelCount = 0;
  let flatA = [];

  if (array == null || array === undefined) {throw 'Flatten undefined or null array';}

  if (array.length === 0) {
    return array;
  }
  console.log(array);

  // for (let i = 0; i < array.length; i++) {
  //   if (typeof (array[i]) !== 'number') {
  //     levelCount += 1;
  //     if (levelCount > 2) {
        
  //     }
  //   }
    
  // }
}
