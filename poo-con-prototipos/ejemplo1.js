"use strict";

//DEFINICION: JavaScript, es un lenguaje multiparadigma (con distintas formas de programar), 
//principalmente orientado a objetos y basado en prototipos. 

// function Animal() {
//     this.nombre = 'Cualquier animal';
//     this.color = 'Cualquier color valido';
// }
// const jirafa = new Animal();
// console.log(jirafa.nombre);
// ESto es lo mismo que:

function Animal(nombre, color) {
    this.nombre = nombre;
    this.color = color;
    this.sonidoAnimal = function sonidoAnimal() {
        return "Hola, estoy emitiendo el sonido de " + this.nombre;
    };
} //Es un prototipo, es una funcion que su primer letra es mayúscula y con la palabra reservada 
//"this" podemos crearle propiedades, y con el símbolo de asignación "=" podemos asignarle valor a esas propiedades.

//DEFINICION: un objeto en JavaScript es la instancia de un Prototipo/función:
const jirafa = new Animal("Jirafa", "Amarillo");
const perro = new Animal("Perro", "Café");

console.log(jirafa);
console.log(perro.sonidoAnimal());