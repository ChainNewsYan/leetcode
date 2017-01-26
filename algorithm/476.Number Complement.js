/* 
 *ram {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var tmp = '';
    num.toString(2).split('').forEach(x=>{
       tmp += x == '0' ? '1' : '0';
    });
    
    return parseInt(tmp,2);
};
