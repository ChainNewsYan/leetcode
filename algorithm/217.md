# Question
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
# solution
```go
func containsDuplicate(nums []int) bool {
    numsCopy := map[int]int{}
    for _, n := range nums {
        if _, ok := numsCopy[n]; ok {
            return true
        }
        numsCopy[n] = 0
    }
    
    return false
}
```
# explain
解法很多，也都很简单。看了下 discussion， C++ /Python /JavaScript 等语言都原生支持 Set。  
集合的性质是元素具有唯一性，所以数组里的重复元素只会保留一个。这时只要把数组变为集合，判断 `length(array) != length(set)` 就可以了。