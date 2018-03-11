# Question
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

**For example:**
```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
```

# solution
```go
func titleToNumber(s string) int {
    len := strings.Count(s, "") - 2

    sum := 0
    for _, letter := range s {
        p := int((letter - 64)) * int(math.Pow(26, float64(len)))
        sum += p
        len--
    }
    return sum
}
```

# explain 

 
