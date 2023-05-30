
let multiplica = (num1,num2) => {
    let resultado = num1 * num2;
    return resultado;
  }
  console.log(multiplica(4,2));


//
//


// PALINDROME
function palindrome() {
    if (palindrome.reverse === 'ArrozALaZorra') {console.log("Es palindrome");
} else {palindrome.reverse !=='ArrozALaZorra'} (console.log("No es palindromo"));
}
palindrome("ArrozALaZorra")


// let palindrome = (ArrozALaZorra) => {
//     ArrozALaZorra = ArrozALaZorra.replace(",").toLowerCase();
//     return palindrome === palindrome.split('').reverse('').join('');
// }


//FARENHEIT TO CELCIUS
//No aceptaba la operación para convertir a celcius que es "farenheit-32*0.5555"
function celsiusToFarenheit(celsius) {
    let farenheit = celsius*1.8+32;
    console.log(celsius + "°C equivalen a " + farenheit + "°F")
}

celsiusToFarenheit(30)

let farenheit = (celsius) => celsius*1.8+32;
console.log(farenheit(30)+ "°F")  