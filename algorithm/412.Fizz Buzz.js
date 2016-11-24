/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];
    while(n) {
        var content = n % 15 != 0 ? ( n % 5 != 0 ? ( n % 3 !=0 ? n+'' : 'Fizz') : 'Buzz') :'FizzBuzz';
        res.unshift(content);
        n--;
    }
    
    return res;

};