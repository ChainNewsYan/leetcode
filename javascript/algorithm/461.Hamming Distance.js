/* 
 * ram {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
     var l = 0;
     (x^y).toString(2).split('').forEach(x=>{
         x=='1'&&++l;
     });
     
     return l;
};
