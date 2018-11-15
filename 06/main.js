var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];
for (var unite = 0; unite < array1.length; unite++) {
  	result[unite] = array1[unite];
}
var i = 0
do {
  	result[unite] = array2[i];
  	unite++;
  	i++;
} 
while (i != 3);
console.log("result: ", result);

