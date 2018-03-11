package main

import (
	"math"
	"fmt"
)

func main () {
	fmt.Println(Fib_3(100))   // 没有限定 n 的最大值, 会溢出
}

/**
 *  fibonacci 数列满足 f(0) = 0, f(1) = 1, f(n) = f(n-1) + f(n-2) (n>=2, *)
 *  最小允许计算 f(0), 所以递归出口的判断条件应该是 n < 2 或 n == 0
 *  尾递归一般是把这一次的计算结果保存在参数里，递推到下一次调用然后直接使用这个保存值. 但是初始调用时这个参数值就要是明确的。在 fib_1 里需要的初始参数值就是 (n, f(0), f(1))
 */


/**
 * 普通递归
 * fn = f(n-1) + f(n-2), 递归出口应该放在当 n < 2 的时候
 */
func Fib_0 (n int) int {
	if (n <= 1) {
		return n
	}
	return Fib_0(n-1) + Fib_0(n-2)
}


/**
 * 普通递归的优化
 * fib_0 里会有大量重复计算，比如 fib_0(10) 会进行 2 次 fib_0 (8) 的计算, 会进行 3 次 fib_0 (7) 计算
 * 可以把计算过的结果存起来
 */
var tmp = make(map[int]int) // 注意判断最大值... 
func Fib_0_enhanced(n int) int {
	 if (n <= 1) {
		 return n
	 }
	 if _, ok := tmp[n]; ok {
		 return tmp[n]
	 }
	 tmp[n] = Fib_0_enhanced(n-1) + Fib_0_enhanced(n-2)
	 return tmp[n]
 }


/**
 * 尾递归
 * n 递减，但是初始调用必须提供 r1 和 r2 (accumulator - 累加器), 所以从 f(0) + (f1) 开始算递增， f(0) + f(1) + ... + f(n-2) + f(n-1)
 * 初始调用为 fib_1(n, f(0), f(1))
 */
func Fib_1 (n int, r1 int, r2 int) int{
	if (n == 0) {
		return r1
	}
	return Fib_1(n-1, r2, r1+r2)
}


/**
 * 迭代
 */

 func Fib_2(n int) int {
	 if (n <= 1) {
		 return n
	 }
	 tmp := map[int]int{0:0, 1:1}
	 for i := 2; i <=n; i++ {
		tmp[i] = tmp[i-1] + tmp[i-2]
	 }
	 return tmp[n]
 }


 /**
  * 通项公式求解
  * 数学比较差.. 就不推导了
  */
  func Fib_3(n int) int {
	  sq5 := math.Sqrt(5)
	  coeff := 1 / sq5
	  m := math.Pow(((1 + sq5) / 2), float64(n)) - math.Pow(((1 - sq5) / 2), float64(n))
	  return int(coeff * m)
  }


  /**
   * 矩阵快速幂优化递推求解
   */
  func Fib_4(n int) int {
	  return 0  // TODO keep updating
  }