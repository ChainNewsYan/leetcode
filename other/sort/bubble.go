package main

func bubble(arr []int) []int {
    len := len(arr)
    if (len < 2) {
        return arr
    }
    for i:=0; i<len; i++ { 
        for j:=0; j<len-i-1; j++ {
            if (arr[j] > arr[j+1]) {
                tmp := arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}