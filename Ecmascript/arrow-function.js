
//Función clásica
function suma(a, b){
    //en la función flecha no puedo usar clases.
    return a+b;
}

//Función flecha
//Cuando tengo una sola línea puedo ignorar las {} y el return (como es en la función clásica).
const suma2 = (a, b) => {
    return a + b;
}

//Función Flecha una línea
const suma3 = (a,b) =>  a + b;
// const suma3 = (a, b) => {return a + b};

console.log(suma2(5,6));
console.log(suma3(7,7));

//Para las funciones flecha tengo que declararlas antes de usarlas; p.ej.:
// const suma2 = (a,b) =>  a + b;
//
//console.log(suma2(5,6));