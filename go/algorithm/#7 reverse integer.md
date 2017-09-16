# Question
Reverse digits of an integer.

**Example1:** x = 123, return 321  
**Example2:** x = -123, return -321  

**Note:**  
The input is assumed to be a 32-bit signed integer. Your function should **return 0 when the reversed integer overflows.**

# solution
```go
func reverse(x int) int {
    const MAXINT32 = 1<<31-1
    const MININT32 = -1<<31
        
    var res int
    for ; x != 0; x/=10 {
        res = res * 10 + x % 10
        if res > MAXINT32 || res < MININT32 {
            return 0
        }
    }

    return res
}
```
# explain
时间复杂度 ```O(n)```。  

主要是判断 reverse 之后的 int32 溢出情况  
