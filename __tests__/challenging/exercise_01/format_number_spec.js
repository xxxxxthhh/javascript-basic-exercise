/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 17:06:37
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import formatNumber from '../../../src/exercise_01/numberFormatter';

// Please do NOT modifiy the code in this file.
describe('We would like to format number', () => {
  it('should format number with dollar sign if currency option is specified', () => {
    const formatted = formatNumber(2, { currency: true });

    expect(formatted).toEqual('$ 2.00');
  });

  it('should round number to 2 numerics', () => {
    const formatted = formatNumber(2.718);

    expect(formatted).toEqual('2.72');
  });

  it('should combine number rounding and dollar sign', () => {
    const formatted = formatNumber(2.718, { currency: true });

    expect(formatted).toEqual('$ 2.72');
  });
});
