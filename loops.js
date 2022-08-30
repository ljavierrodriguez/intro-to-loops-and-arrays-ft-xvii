/* 

for(inicializador; condicion; incremento){
    sentencias
}

for(indice in valores){
    sentencias
}

for(valor of valores){
    sentencias
}


while(condicion){
    sentencias
}

do {
    sentencias
} while (condicion)


continue
break

*/

let nombres = ["Giannina", "Jimena", "Mau", "Max", "Carlos P", "Carlos V"];
let persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez',
    edad: 40,
    direccion: 'Av Providencia'
}

console.log("Numeros del 1 al 10 solo pares")
for(let i = 1; i <= 10; i++){
    if(i % 2 === 1) continue;
    console.log(i);
}

console.log("Numeros del 40 al 100 salir al llegar a 50");
for(let i = 40; i < 100; i++){
    if(i === 50) break;
    console.log(i);
}

console.log("Mostrando el contenido de un array");
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

console.log("Usando for in con nombres")
for(let indice in nombres){
    console.log(nombres[indice])
}

console.log("Imprimiendo los valores del objeto")
for(let key in persona){
    console.log(key);
    console.log(persona[key]);
}

console.log("Imprimir valores del array nombres")
for(let nombre of nombres){
    console.log(nombre);
}

nombres.forEach((valor, indice, arreglo) => {
    console.log(valor);
    console.log(indice);
    console.log(arreglo);
})

let nombres2 = nombres.map((valor, indice, arreglo) => {
    return valor.toUpperCase();
})

console.log(nombres2);

let nombres3 = [];

for(let valor in nombres){
    nombres3.push(valor.toUpperCase())
}

console.log(nombres3);

let i = 1;
while(i <= 10){
    console.log(i)
    i++;
}

let j = 0;
while(j < nombres.length){
    console.log(nombres[j]);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while(k == 10)