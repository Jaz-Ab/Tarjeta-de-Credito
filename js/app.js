var card=["12233435542"];
var isValidCard = function (array) {
  newArr= [array[0].split("")];
  newArr[0].reverse();
  return newArr;

};

//Pruebas de funcionamiento para luego ejecutar

var a=["12232438"];
var b=[a[0].split("")];
b[0].reverse();


var c=[b[0][0]*2];
var sum=[0];
var l=[c.toString()];
var k=l[0].split("");
var Item1=parseInt(k[0]);
var Item2=parseInt(k[1]);
sum= Item1+Item2;
