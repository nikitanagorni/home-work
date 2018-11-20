var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {

    var result = [];

    for(var i = 0; i < dataPriority.length; i++){
        
        var a = dataPriority[i];

        var uniteResult = [];

        switch (a) {
        
        case 'null':
            result.push(null);
            break;


        case 'number':
            uniteResult = typeArr('number', array);
            
            for(var e = 0; e < uniteResult.length; e++){
                result.push(uniteResult[e]);
            }
            
            break;
            
        case 'object':
            uniteResult = typeArr('object', array);
            
            for(e = 0; e < uniteResult.length; e++){
                if(uniteResult[e] !== null) {
                    result.push(uniteResult[e]);
                }
            }
            
            break;

            case 'string':
            uniteResult = typeArr('string', array);
            
            uniteResult.sort();
            
            for(e = 0; e < uniteResult.length; e++) {
                result.push(uniteResult[e]);
            }
            
            break;

        case 'undefined':
            result.push(undefined);
            break;
          
        case 'boolean':
            uniteResult = typeArr('boolean', array);
            
            function compareNumeric(a, b) {
                if (a > b) return -1;
                if (a < b) return 1;
            }

            uniteResult.sort(compareNumeric);

            for(e = 0; e < uniteResult.length; e++) {
                result.push(uniteResult[e]);
            }

            break;
        }   
    }    

function typeArr(unite, end) {
      
    var result = [];
      
    for(var i = 0; i < end.length; i++) {
          
        if(typeof end[i] === unite) {
                result.push(end[i]);
        }
    }
        
    return result;
}

return result;

}
