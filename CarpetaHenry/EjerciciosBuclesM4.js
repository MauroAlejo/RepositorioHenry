function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retornar el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:
    if (x === y){
        console.log(x);
        //return x,y;
    }else if (x > y){
        console.log(x);
        }else console.log(y)

    }
 obtenerMayor(23,5);

 function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if (edad >= 18)console.log("Allowed")
    else console.log("Not Allowed")
 }
 mayoriaDeEdad(100);

 function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:
    if (status === 1){
        console.log("Online");
    }else if (status === 2)console.log("Away")
        else console.log("Offline");
}
conection(2);

function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:
    switch (idioma){
        case "aleman": console.log("Guten Tag!")
        break;
        case "mandarin": console.log("Ni Hao!")
        break;
        case "ingles": console.log("Hello!")
        break;
        default: console.log("Hola!");
    }
 
}
 saludo("español");

 function esDiezOCinco(num) {
    // Retornar true si "num" es 10 o 5.
    // De lo contrario, retornar false.
    // Tu código:
    if (num === 10 || num === 5)console.log(true)
    else console.log(false)
 }
 esDiezOCinco(10);

 function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    if (num % 1 === 0)console.log(true)
    else console.log(false)
 }
 esEntero(333.58);

 function fizzBuzz(num) {
    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:
    if (num % 3 === 0 && num % 5 === 0){
        console.log("fizzbuzz");
    }else if (num % 3 === 0){
            console.log("fizz");
        }else if (num % 5 === 0)console.log("buzz")
        else console.log(false)
}
fizzBuzz(15);

function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    cont = 0;
    if (num <= 1){
        console.log(false)
    }else{ for (var i=1; i<=num; i++){
        if (num % i === 0){
            cont = cont+1;
        }
    }
        if (cont === 2)console.log(true)
        else console.log(false)
    }
 }
 esPrimo(-101);

 function tieneTresDigitos(num) {
    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    if (num >= 100)console.log(true)
    else console.log(false)
 }
 tieneTresDigitos(2555);
 
 function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    contador = 1;
    do {
        num = num + 5;
        contador ++;
    }while (contador <= 8);
    console.log(num);
 }
 doWhile(8);