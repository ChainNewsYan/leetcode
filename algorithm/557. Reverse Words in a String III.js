/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var res = '';

    s.split(' ').forEach(word=>{
        res = res + word.split('').reverse().join('') + ' ';
    });
    
    return res.substr(0,res.length-1);
};