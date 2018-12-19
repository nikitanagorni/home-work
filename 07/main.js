var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
    result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority) {
    

    var result = [];

    for(var i = 0; i < dataPriority.length; i++){
        
        var a = dataPriority[i];

        var midResult = [];

        switch (a) {
        
        case 'number':
            midResult = typeArr('number', array);
            
            for(var j = 0; j < midResult.length; j++){
                result.push(midResult[j]);
            }
            
            break;

        case 'null':
            result.push(null);
            break;
        
        case 'string':
            midResult = typeArr('string', array);
            
            midResult.sort();
            
            for(j = 0; j < midResult.length; j++) {
                result.push(midResult[j]);
            }
            
            break;
            
        case 'object':
            midResult = typeArr('object', array);
            
            for(j = 0; j < midResult.length; j++){
                if(midResult[j] !== null) {
                    result.push(midResult[j]);
                }
            }
            
            break;

        case 'undefined':
            result.push(undefined);
            break;
          
        case 'boolean':
            midResult = typeArr('boolean', array);
            
            function compareNumeric(a, b) {
                if (a > b) return -1;
                if (a < b) return 1;
            }

            midResult.sort(compareNumeric);

            for(j = 0; j < midResult.length; j++) {
                result.push(midResult[j]);
            }

            break;
        }   
    }    

    function typeArr(type, arr) {
      
        var result = [];
      
        for(var i = 0; i < arr.length; i++) {
          
            if(typeof arr[i] === type) {
                result.push(arr[i]);
          }
        }
        
        return result;
    }

    return result;

}