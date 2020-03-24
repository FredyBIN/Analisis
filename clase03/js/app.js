
var num;
num= prompt("Ingrese el número de la tabla que desea obtener:","");
console.log("Imprimiendo la tabla del: "+num);
  for (var i=1; i<11;i++){
    var resul=num*i;
    console.log(num+ "x"+i+"="+resul);
  }
  console.log("=======================================")
  console.log("\n");

var tabla;
var final;
var numero=1;
tabla= prompt("Ingrese el número de la tabla que desea obtener:","");
final= prompt("Ingrese el número de la tabla final:","");
while (tabla>final) {
  final= prompt("No es posible procesar la petición, vuelva a ingresar el número, debe ser mayor al anterior:","");
}
while (tabla<=final) {
  console.log("Tabla del: "+tabla);
  while (numero<=10) {
    var resul=tabla*numero;
    console.log(tabla+"x"+numero+"="+resul);

    numero++;
  }
  console.log("=======================================")
  console.log("\n");
  console.log("\n");
  tabla++;
  numero=1;
}
