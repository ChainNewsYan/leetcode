
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels  = ['a','e','i','o','u','A','E','I','O','U'];
    var indexs  = [];
    var letters = [];
    var arrs    = s.split('');
    var length  = arrs.length;
    for(let i =0;i<length;i++){
        if(vowels.indexOf(arrs[i])!==-1){
            indexs.push(i);
            letters.push(arrs[i]);
        }
    }
    indexs.forEach(x=>{
        arrs[x] = letters.pop();
    })
    return arrs.join('');
};
