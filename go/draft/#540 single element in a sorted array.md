# Question
Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.  

**Example 1:**
```
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
```
**Example 2:**
```
Input: [3,3,7,7,10,11,11]
Output: 10
```

**Note:** Your solution should run in O(log n) time and O(1) space.
# solution 1
```go
func singleNonDuplicate(nums []int) int {
    len := len(nums)
    for i, v := range nums {
        if i == len - 1 {  // 当前元素如果已经是最后一个元素，直接 break. 同时也是为了防止下面的 nums[i+1] 数组越界
            break
        }
        nums[i+1] = v ^ nums[i+1]  // 当前元素和下一个元素 xor 的结果会被保存到下一个元素
    }
    
    return nums[len-1]  
}
```
# solution 2
```go
```
# explain
## solution 1 
时间复杂度 ```O(n)```。

如果 go 有 reduce 功能的话会很好做，比如用 js 直接 ```return nums.reduce((x, y) => x ^ y)``` 搞定。这种解法主要是用到了 xor  (异或) 位运算符的其中 3 个性质 :  
1. x ^ x = 0  
2. 0 ^ x = x
3. x ^ y ^ x = x ^ x ^ y  

根据这三个性质 : 
```
[1,1,2,3,3,4,4,8,8]

  1 ^ 1 ^ 2 ^ 3 ^ 3 ^ 4 ^ 4 ^ 8 ^ 8
= 0 ^ 2 ^ 0 ^ 0 ^ 0
= 2   // 也就是说把整个数组元素进行异或，得到的最后结果就是不重复值
```  

由于 go 没有 reduce, 我们在 range 的时候都把 ```当前元素 ^ 下一个元素``` 的结果覆盖下一个元素的值，以此来达到 reduce 的效果。这样在遍历一遍之后 nums 的最后一个元素就是我们想要的结果，时间复杂度是 O(n)。

## solution 2
时间复杂度 ```O(log(n))```。  

题目要求时间复杂度是 ```O(log(n))```，再加上已经说明了数组是有序的。其实也只剩下 ```二分查找``` 这一种思路了。