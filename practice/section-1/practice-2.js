'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
var sameCount = 0;
 for(var i=0;i<collectionA.length;i++){
    var tempA = collectionA[i];
    for(var j=0;j<collectionB[0].length;j++){
        var tempB = collectionB[0][j];
        if(tempA == tempB){
                result[sameCount] = tempB;
                sameCount++;
        }
    }
}
return result;
}
