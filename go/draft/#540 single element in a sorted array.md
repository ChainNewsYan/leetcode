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
        if i == len - 1 {  // 当前元素如果已经是最后一个元素，直接 break. 同时也是为了防止下面的 nums[i+1] 数组越界
            break
        }
        nums[i+1] = v ^ nums[i+1]  // 当前元素和下一个元素 xor 的结果会被保存到下一个元素
    }
    
    return nums[len-1]  
}
```
# solution 2
```go
func singleNonDuplicate(nums []int) int {
    left  := 0
    right := len(nums) - 1
    mid := 0
    for left <= right {
        mid = (left + right) / 2
        if left == right {   // left = right, 则 mid = left = right 。即当前值为该查找过程的最后一个值
            break
        }
        if mid % 2 == 1 {  // mid % 2 == 1 说明 nums[mid] 左右各有奇数个元素
            if nums[mid] == nums[mid+1] {
                right = mid - 1
            } else if nums[mid] == nums[mid-1] {
                left = mid + 1
            } else {
                break
            }
        } else { // mid % 2 == 0 说明 nums[mid] 左右各有偶数个元素
            if nums[mid] == nums[mid+1] {
                left = mid + 2
            } else if nums[mid] == nums[mid-1] {
                right = mid - 2
            } else {
                break
            }
        }
    }
    
    return nums[mid]
}
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

由于 go 没有 reduce, 我们在 range 的时候都把 ```当前元素 ^ 下一个元素``` 的结果覆盖下一个元素的值，以此来达到 reduce 的效果。这样在遍历一遍之后 nums 的最后一个元素就是我们想要的结果，时间复杂度是 O(n)。

## solution 2
时间复杂度 ```O(log(n))```。  

题目要求时间复杂度是 ```O(log(n))```，再加上已经说明了数组是有序的。其实也只剩下 ```二分查找``` 这一种思路了。 二分查找中，每一次迭代都要判断出目标元素在中间元素的左边还是右边，每一次迭代舍弃掉一半不符合条件的数据，直到找到目标元素。    

即，每次迭代要判断出不重复值是在中间值的左边还是右边。  

```go
/**
 * 由题目可知，nums 只能有奇数个数元素，所以一定会有处于中间的元素。有两种情况:
 *    1. 中间元素左右两边有奇数个元素，如: 1,1,2,2,3,4,4. 中间元素 2 左右两侧各有 3 个元素
 *    2. 中间元素左右两边有偶数个元素，如: 1,1,2,2,3,3,4,5,5. 中间元素 3 左右两侧各有 4 个元素
 */

if mid % 2 == 1 {  // mid % 2 == 1 说明 nums[mid] 左右各有奇数个元素
    // eg: 1,1,2,3,3,4,4 . 
    // 如果中间元素 nums[3] 和 nums[4] 是一对重复值，则 nums[3] 左侧的奇数个元素一定有一个元素无法与其他元素组成一对重复值
    // 即，不重复值一定在 nums[mid] 左侧，right = mid - 1
    if nums[mid] == nums[mid+1] {
        right = mid - 1
    } else if nums[mid] == nums[mid-1] { // 同理，不重复值一定在 nums[mid] 右侧
        left = mid + 1
    } else {
        break
    }
} else { // mid % 2 == 0 说明 nums[mid] 左右各有偶数个元素
    // eg: 1,1,2,2,3,3,4,5,5
    // 中间元素 nums[4] 和 nums[5] 是一对重复值，则 nums[5] 右侧的 4,5,5 是奇数个元素，已定有个一元素无法与其他元素组成一对重复值
    // 即，不重复值已定在 nums[mid] 右侧，left = mid + 2
    if nums[mid] == nums[mid+1] {
        left = mid + 2
    } else if nums[mid] == nums[mid-1] { // 同理，不重复值一定在 nums[mid] 左侧
        right = mid - 2
    } else {
        break
    }
}
```
