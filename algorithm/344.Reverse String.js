// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

/**
 * @param {string} s
 * @return {string}
 * 这里有个坑,记得填
 */
var reverseString = function(s) {
    var tail = s[s.length-1];
    return tail?tail+=reverseString(s.slice(0,s.length-1)):"";
};
