let str = prompt("Digita tu cadena de caracteres: ");
let arr=[];
let ig=0;
let dif=0;
function palindrome(str){
    // primero creo un ciclo for para recorrer el string y a partir de èl
    // crear un array pero sin el caracter del espacio en blanco
    for (let i=0; i<str.length; i++){
        if((str[i]) !== (" ")){ //en esta linea comparo si no es espacio en blanco
            arr.push(str[i]); //agrego los caracteres al array
        }
    }
    console.log(arr); //aca lo muestro para verificar que
                      // que si se habian eliminado los espacios en blanco
    const arr2 = [...arr].reverse(); //cree un nuevo array con el reverso el array anterior
                                     //que contiene la cadena original
    console.log(arr2); //lo mostre para verificar que si lo hizo bien
    //el siguiente ciclo for compara uno a uno los caracteres los dos array anteriores
    //tanto el original como el volteado para saber si esl string es palindrome
    for (i=0; i<arr.length; i++){
        console.log(arr[i],arr2[i]);
        if((arr[i]) === (arr2[i])){
            ig=ig+1; //cree unos contadores
        }else{
            dif=dif+1;
        }
    }
    if((ig>0) && (dif===0)){
        console.log("true: es palindrome");            //compare los valores de los contadores
    }else if((dif>0)||(ig===0)){                       //para concluir el ejercico
        console.log("false: no es palindrome");
    }
}
palindrome(str);