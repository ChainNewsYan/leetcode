# Question
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.  

**example**
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

# solution
```go
func twoSum(nums []int, target int) []int {
    hash := map[int]int{}
    res  := []int{}
    for k, v := range nums {
        if _, ok := hash[v]; ok {
            res = append(res, hash[v], k)
            break
        }
        hash[target-v] = k
    }
    
    return res
}
```
# explain
时间复杂度 ```O(n)```。  

需要先声明一个 map (hash table, dictionary ?)。 遍历数组，将 ```target - element : index``` 放入 hash。例如将 ```9-2 :0``` 放入 hash :   
```
hash : {
    7 : 0,   // 9 - 2 = 7, 索引为 0. 说明 nums[0] 和 target 差 7
}
```
遍历到第二个元素 7 ，则判断是否存在 hash[7]，如果找到，则 ```7 + nums[hash[7]] = target``` 。
