package main

import (
	"fmt"
)

func main () {
	fmt.Println(canWinNim(16))
}

/**
 * nim game, leetcode 第 292 题. 
 */
func canWinNim(n int) bool {
    return n%4 == 0
}