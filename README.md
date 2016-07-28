# Leetcode (Javascript)
More detail [www.cinlen.com](http://www.cinlen.com)
## First round
* Begin with 2016-6
* Time complexity and space complexity is not considered in the first round
* The better solution(or different solution) will be given out by next round

***

# Detail
## #104 Maximum depth of binary tree
_**my soludtion**_
```javascript
var maxDepth = function(root) {
    return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```
_**explantion**_
```
1.The maximum depth of binary tree is the maximum depth of it's child +1
2.Use recursion
```

## #226 Invert binary tree

_**my solution**_
```javascript
var invertTree = function(root){
    if(null === root) return root;
    var temp   = invertTree(root.left);
    root.left  = invertTree(root.right);
    root.right = temp; 
    return root;
}
```


