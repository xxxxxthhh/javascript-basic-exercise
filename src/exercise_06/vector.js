/*
 * @Author: Kyle Xu
 * @Date: 2020-09-09 16:30:44
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-09-10 00:43:23
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'x', {
      writable: false,
    });
    Object.defineProperty(this, 'y', {
      writable: false,
    });
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  static plus(V1, V2) {
    return new Vector(V1.x + V2.x, V1.y + V2.y);
  }

  static minus(V1, V2) {
    return new Vector(V1.x - V2.x, V1.y - V2.y);
  }
}
