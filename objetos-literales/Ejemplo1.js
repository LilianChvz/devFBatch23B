"use strict";

//objetos literales != objetos de poo (programacion orientada a objetos)
const jaguar = {
    //a los objetos literales se les asigna atributos/propiedades (o metodos)
    //clave : valor, sintaxis para añadir propiedades y métodos
    nombre: "Jaguar",
    color: "amarillo",
    //un "método" es una funcion definida dentro de un objeto literal, y si es fuera es una "funcion"
    funcionJaguar: () => {
        return "Gruñido de jaguar";
    },
};

console.log(jaguar)
//Podemos acceder a los valores de nuestras propiedades mediante la notacion de puntos:
console.log(jaguar.nombre);
//Para acceder a los métodos y atributos dentro de las funciones:
console.log(jaguar.funcionJaguar());
