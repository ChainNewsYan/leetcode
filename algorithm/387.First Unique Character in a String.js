

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(!s)
        return -1;
    for(let i in s.split('')){
        if(s.replace(s[i],'').indexOf(s[i])===-1)
            return i*1;
    }
    return -1;
};



// 这个解法能得到正确结果，但是超出内存使用限制了，最后一个测试用例没有通过。
// js里的replace默认是懒惰模式，只会替换第一个匹配的内容，所以我想逐个替换然后通过判断索引。
// 但是明显一系列的split和和遍历使用replace会带来太大的额外内存消耗    


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(!s)
        return -1;
    for(let el of s.split('')){
        if(s.split(el).length===2)
            return s.indexOf(el);
    }
    return -1;
};


// 这个解法能得到正确结果，但是超出运行时间限制了，也是最后一个测试用例没有通过。
// 这里通过分割当前元素来判断长度，如果按当前元素分割字符串后的结果数组长度为2，表示当前元素只出现1次。
// 但是明显嵌套的split对太长的字符串会造成时间上的太大消耗


var firstUniqChar = function(s) {
    for(let i =0;i<s.length;i++){
        if(s.indexOf(s[i])===s.lastIndexOf(s[i]))
            return i;
    }
    return -1;
};

// 这个方法是我看discuss的，方法很简单，想不出来是因为我只知道indexOf()方法，还不知道有lastIndexOf()这个方法
