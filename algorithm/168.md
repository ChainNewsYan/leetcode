# Question
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

**For example:**
```
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB 
```

# solution
```go
var alphabet = [27]string{"占位符,方便数组从 1 开始", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"}

func convertToTitle(n int) string {
    if n <= 26 {
        return alphabet[n]
    }
    
    if n % 26 == 0 {
        return convertToTitle(n/26 - 1) + "Z"
    }
    
    return convertToTitle(n/26) + alphabet(n % 26)
}
```

# explain 

 
