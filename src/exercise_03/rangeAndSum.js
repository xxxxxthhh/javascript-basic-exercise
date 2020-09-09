/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 18:32:00
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const numList = [];
  if (start === end) return [];


  const size = end - start;

  if (start < end) {
    for (let i = 0; i < size; i += 1) numList.push(start + i);
    return numList;
  }

  for (let i = 0; i < -size; i += 1) numList.push(start - i);
  return numList;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let sumOfnum = 0;
  if (numbers === undefined) return 0;
  const size = numbers.length;
  for (let i = 0; i < size; i += 1) {
    if (typeof (numbers[i]) !== 'number') { sumOfnum += sum(numbers[i]); }
    sumOfnum += numbers[i];
  }
  return sumOfnum;
}
