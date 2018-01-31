package main

/**
 * 阶乘, 0 的阶乘等于 1
 */


/**
 * 递归
 */
func Fac_0(n int) int {
	if n <= 1 {
		return 1
	}
	return n * (Fac_0(n-1))
}

/**
 * 迭代
 */
func Fac_1(n int) int {
	ret := 1
	for n > 0 {
		ret *= n
		n--
	}
	return ret
}