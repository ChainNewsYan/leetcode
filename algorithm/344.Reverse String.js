// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

/**
 * @param {string} s
 * @return {string}
<<<<<<< HEAD
 * 递归，但是这里有个坑，暂时不填
 */
var reverseString = function(s) {
    var tail = s[s.length - 1];
    return tail ? tail += reverseString(s.slice(0, s.length - 1)) : "";
};

/**
 * 循环
 */
var reverseString = function(s) {
    var res = "";
    while (s) {
        res += s[s.length - 1];
        s = s.slice(0, s.length - 1);
    }
    return res;
};
=======
 * 这里有个坑,记得填
 */
var reverseString = function(s) {
    var tail = s[s.length-1];
    return tail?tail+=reverseString(s.slice(0,s.length-1)):"";
};
>>>>>>> c2ca46a7cdbe69cbdcda96120979bec5a588c6c4
