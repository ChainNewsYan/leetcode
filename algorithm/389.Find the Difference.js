
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s=s.split('').sort();
    t=t.split('').sort();
    for(let i in t){
        if(t[i]!==s[i])
            return t[i];
    }
};
