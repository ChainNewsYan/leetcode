## #1 Recursion (递归)
---
基本上都是线性递归的例子。  

- [fibonacci - 斐波那契数列](fibonacci.go)
- [factorial - 阶乘](factorial.go)
- [hanoi - 汉诺塔](hanoi.go)
- [binary tree traversal - 二叉树遍历](binaryTreeTraversal.go)


## #2 Tail recursion (尾递归)
---
尾递归还没怎么看. 收藏一些文章先  
* [coursera : accumulator](https://zh.coursera.org/learn/programming-languages/lecture/4f7Tw/accumulators-for-tail-recursion) 这个 Accumulator (累加器) 就是用来保存计算结果的那个参数..
* [尾递归与Continuation](http://blog.zhaojie.me/2009/03/tail-recursion-and-continuation.html)
* [漫谈递归：PHP里的尾递归及其优化](http://www.nowamagic.net/librarys/veda/detail/2334)
* [尾递归? Continuation Passing Style?](http://www.nowamagic.net/librarys/veda/detail/2331) 
* [Trampoline](https://www.cnblogs.com/tiger-xc/p/4567276.html)

## #3 log
---
#### # 2018-01-13 
* 经常找到把 **线性递归**和 **尾递归** 放到一起讲的文章, 感觉这两个其实不是同一维度的东西...
* 普通递归（非尾递归）在递推到最深层次(递归出口), 开始回归的时候得到才第一个计算结果。 尾递归第一次就能得到一个计算结果,把这个结果保存在参数里传给下一次调用。但是初始调用的时候要给出这个参数值。
* 不是所有编译器都实现尾递归优化
* 很容易溢出...