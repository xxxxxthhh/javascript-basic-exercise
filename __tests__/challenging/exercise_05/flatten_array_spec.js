/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-09 23:46:55
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import flattenArray from '../../../src/exercise_05/flattenArray';

// Please do NOT modifiy the code in this file.
describe('for flatten array', () => {
  it('should throw if array is null or undefined', () => {
    expect(() => flattenArray()).toThrowError('Flatten undefined or null array');
    expect(() => flattenArray(null)).toThrowError('Flatten undefined or null array');
  });

  it('should flatten empty array', () => {
    expect(flattenArray([])).toEqual([]);
  });

  it('should flatten un-nested array', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should flatten nested array', () => {
    expect(flattenArray([[1, 2, 3], [4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should flatten mixed array', () => {
    expect(flattenArray([1, 2, [3, 4, 5], [6, 7, 8]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should just flatten 2 levels', () => {
    expect(flattenArray([[1, 2], [[3, 4], 5]])).toEqual([1, 2, [3, 4], 5]);
  });
});
