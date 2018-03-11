# Question
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to **the original place**.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are `R` (Right), `L` (Left), `U` (Up) and `D` (down). The output should be true or false representing whether the robot makes a circle.

**example 1**
```
Input: "UD"
Output: true
```

**example 2**
```
Input: "LL"
Output: false
```

# solution 1
```go
func judgeCircle(moves string) bool {
    coordinate := map[string]int{"x":0, "y":0}
    for _, direction := range moves {
        switch string(direction) {
        case "U":
            coordinate["y"] += 1
            break;
        case "D":
            coordinate["y"] -= 1
            break;
        case "L":
            coordinate["x"] -= 1
            break;
        case "R":
            coordinate["x"] += 1
            break;
        }
    }
    
    return coordinate["x"] + coordinate ["y"] == 0
}
```
# solution 2
```go
func judgeCircle(moves string) bool {
    return strings.Count(moves, "U") == strings.Count(moves, "D") && strings.Count(moves, "L") == strings.Count(moves, "R")
}
```
# explain  
### solution 1 
建立直角坐标系并根据 move 来计算 x, y，当最后坐标仍为 {0,0} 即回到原点。

### solution 2
根据 solution 1 也可以得出：当 moves 里的 U 和 D 的数量一致且 L 和 R 的数量一致时一定会回到原点。