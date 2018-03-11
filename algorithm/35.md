# Question
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.

```
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
```

# solution
```go
func searchInsert(nums []int, target int) int {
    for k, v := range nums {
        if v == target || v > target {
            return k
        }
    }
    
    return len(nums)
}
```
# explain
时间复杂度 ```O(n)```。  