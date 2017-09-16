/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.toUpperCase() === word || word.toLowerCase() === word) {
        return true;   
    } else {
        var valid = true;
        word.split('').forEach(char=>{
            (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) && (word.lastIndexOf(char) !== 0) && (valid = false);
        })
    }
    
    return valid;
};