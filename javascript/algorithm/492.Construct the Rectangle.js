/* 
 *ram {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  
    var sqrt = parseInt(Math.sqrt(area));
     
    for (var i=0; i<sqrt; i++) {
       
        if (area%(sqrt-i) === 0) {
            if (area/(sqrt-i)>sqrt-i)
                return [area/(sqrt-i),sqrt-i];
            else 
               return [sqrt-i,area/(sqrt-i)];
        }
    }


};
