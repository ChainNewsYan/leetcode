# Question
Given an array of size n, find the majority element. The majority element is the element that appears more than `⌊ n/2 ⌋` times.  


You may assume that the array is non-empty and the majority element always exist in the array.

# solution
```go
func majorityElement(nums []int) int {
    floorLen := len(nums) / 2  // int / int 自动向下取整
    store := map[int]int{}
    for _, el := range nums {  
        if store[el] ++; store[el] > floorLen {
            return el
        }
    }
    
    return nums[0]
}
```

# explain 

 
