var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];
while (result < array1.length) {
    result++
    result += array1;
    result += array2;
}
console.log("result: ", result);

