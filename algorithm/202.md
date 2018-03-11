# Question
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers. 

**example**
```
19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

# solution
```go
func isHappy(n int) bool {
    calced := map[int]interface{}{}
    for ;n != 1; n = getNextCalcNum(n) {
        if _, ok := calced[n]; ok {
            return false
        }
        calced[n] = 0
    }
    return true
}

func getNextCalcNum(num int) int {
    var ret int 
    for ;num >= 10; num /= 10 {
        ret += ((num%10) * (num%10))
    }
    ret += (num * num)
    return ret
}
```
# explain
需要一个 map 来存已经计算过的值，当计算过的值又出现过一次就说明这个 loop 是 endlessly 的 (看题目)  

go 中 int 相除向下取整