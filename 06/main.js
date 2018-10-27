var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];
Array.prototype.push.apply(result, array1);
Array.prototype.push.apply(result, array2);

console.log("result: ", result);