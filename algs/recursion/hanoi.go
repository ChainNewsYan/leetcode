package main

import (
	"fmt"
)

/**
 * 汉诺塔，经典的递归游戏，最短步数为 (2^n) -1 , n 是盘子数量
 * 把大象搬到冰箱里只要 3 步 打开冰箱门, 把大象装进去, 把冰箱门关上。
 */
const DiskNum = 5
func main() {
	hanoi_0(DiskNum, "a", "b", "c")
	fmt.Printf("disk num: %d, min step: %d", DiskNum, times)
}

func hanoi_0(n int, a string, b string, c string) {
	if (n < 1) {
		fmt.Println("wrong n")
	}
	if (n == 1) {
		move(n, a, c)
	} else {
		hanoi_0(n-1, a, c, b)  // 把 a 柱最上面的 n-1 个盘子搬到 b, 以 c 做为辅助柱 (打开冰箱门)
		move(n, a, c)  // 把最下面的盘子 n 从 a --> c (把大象装进冰箱里)
		hanoi_0(n-1, b, a, c) // 把 b 柱最上面的 n-1 个盘子搬到 c, 以 a 做为辅助柱 (把冰箱门关上)
	}
}


var times int
func move(disk int, from string, to string) {
	times++;
	// fmt.Println("#" + strconv.Itoa(times) + " disk " + strconv.Itoa(disk) + ": " + from + " ---> " + to)
	fmt.Printf("#%d disk %d: %s ---> %s \n", times, disk, from, to)
}