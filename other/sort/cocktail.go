package main

import (
	"fmt"
)

func main(){
	arr := []int{1,2,4,2,6,5,3,9,7}
	fmt.Println(cocktail(arr))
}

func cocktail(arr []int) []int {
	left  := 0
	right := len(arr) - 1
	if (right < 2) {
		return arr
	}

	for left < right {
		for i:=left; i < right; i++ {
			if arr[i] > arr[i+1] {
				tmp := arr[i]
				arr[i] = arr[i+1]
				arr[i+1] = tmp
			}
		}
		right--

		for i:=right; i>left; i-- {
			if arr[i-1] > arr[i]  {
				tmp := arr[i]
				arr[i] = arr[i-1]
				arr[i-1] = tmp
			}
		}
		left++
	}
	return arr
}