/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return (s.split('LLL').length <= 1) && (s.split('A').length <= 2);
};