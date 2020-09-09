/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 17:20:47
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.
  // console.log(option.currency);
  let formattedString = '$ ';
  if (option !== undefined && option.currency === true) {
    formattedString += number.toFixed(2);
    return formattedString;
  }

  return number.toFixed(2);
}
