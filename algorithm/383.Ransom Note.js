
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine.split('').forEach(x=>{
        var index = ransomNote.indexOf(x);
        if(-1!==index)
            ransomNote.splice(index,1);
    });
    return ransomNote.length===0;
};
