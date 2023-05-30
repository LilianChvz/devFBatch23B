"use strict";

const cinthya = {
    primer_nombre: "Cinthya", //esto como tal es un atributo, y consta de una clave: y un valor
    apellido: "Garcilazo",
    intereses: ['Libros','Tatuajes', 'Cajeta'],
    x1: "uno",
    x2: "dos",
};

//Esto es NOTACION DE CORCHETES (Square brakets). Nos permite valores dinámicos o que puedan ir cambiando.
//podemos guardar la clave en variables o constantes y colocar en los [] las variables 
//o poner la clave entre "" dentro de los []:
// const clave = "intereses";
//console.log(cinthya["clave"]);

console.log(cinthya["apellido"]);
console.log(cinthya["x" + 1]); //aquí es como si accediera a x1. Podemos concatenar para agregar más lógica, hacerlo más dinámico (solo en la notación de corchetes).