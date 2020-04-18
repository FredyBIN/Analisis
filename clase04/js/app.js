console.log("Rellenando un Array con 10 numeros aleatorios");
console.log("\n");

function getRandomInt(min,max) {
  return Math.floor(Math.random()*(max - min))+ min;
}

let origen = [];

for(let i=1;i<=10;i++){
  origen.push(getRandomInt(1,100));

}

let destino = origen.slice();

console.log("Array origen");
console.log(origen);
console.log("\n");

console.log("Array destino ordenado");

console.log(origen.sort(function (a, b){
    return a - b;
}))
