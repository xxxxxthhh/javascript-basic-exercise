/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 17:38:40
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let countPrediction = 0;
  if (string === '' || string == null || string === undefined) {
    return 0;
  }
  if (prediction === undefined) {
    return string.length;
  }
  for (let i = 0; i < string.length; i += 1) {
    if (prediction(string[i]) === true) {
      countPrediction += 1;
    }
  }
  return countPrediction;
}
