/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var res = [];
    words.forEach(word=>{
        var firstCharLine = findLine(word[0]);
        var l = word.length-1;
        var flag = true;
        while(l) {
            var charLine = findLine(word[l--]);
            if (charLine != firstCharLine) {
                flag = false;
                break;
            }
        }
        flag == true && res.push(word);
        
    });
    
    return res;
};

var findLine = function(char) {
    let alphabet = [
        'q','w','e','r','t','y','u','i','o','p',  // top 0-9
        'a','s','d','f','g','h','j','k','l',      // mid 10-18,
        'z','x','c','v','b','n','m'               // bottom 19-25
    ];
    
    var index = alphabet.indexOf(char.toLowerCase());   // 这里改成map，字符与row映射，避免查找索引会更快
    return index <= 9 ? 1 : (index >= 19 ? 3 : 2) ;
}