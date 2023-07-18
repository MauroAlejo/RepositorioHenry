/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
    console.log(array[0]);
    return array[0];
 }
 devolverPrimerElemento([7,2,3,4,5]);
 
 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    console.log(array[array.length-1]);
    return array[array.length-1];
 }
 devolverUltimoElemento([7,2,3,4,9]);
 
 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    console.log(array.length);
 }
 obtenerLargoDelArray([2,4,6,7,6]);

 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    //var arraynuevo = array.map((num)=>{  // es lo mismo que la línea que sigue  
    var arraynuevo = array.map(function(num){
        return num+1;
    }); console.log(arraynuevo);
 }
 incrementarPorUno([2,4,6,8]);
 
 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.push(elemento);
    console.log(array)
 }
 agregarItemAlFinalDelArray([2,4,6],2555)
 
 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    array.unshift(elemento);
    console.log(array);
 }
 agregarItemAlComienzoDelArray([2,3,4],212)
 
 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    palabranueva = palabras.join(" ");
    console.log(palabranueva)
 }
 dePalabrasAFrase(["Hola", "Mauro", "todo", "bien?"]);
 
 function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
    if (array.includes(elemento))console.log(true);
    else console.log(false)
 }
 arrayContiene([1,2,3],15)
 
 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    suma = 0;
    for (i=0; i<arrayOfNums.length; i++){
        suma = suma + arrayOfNums[i];            
    } console.log(suma);
 }
 agregarNumeros([23,5,3]);

 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    suma = 0;
    for (var i=0; i<resultadosTest.length; i++){
        suma = suma + resultadosTest[i];
    } console.log(suma / resultadosTest.length);
 }
 promedioResultadosTest([4,4,4,4]);
 
 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    grande = 0;
    for (var i=0; i<arrayOfNums.length; i++){
        if (arrayOfNums[i] > grande){
            grande = arrayOfNums[i];
        }
    }console.log(grande);
 }
 numeroMasGrande([2,7,5,1,25678]);
 
 function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    producto = 1;
    if (arguments === 0){
        console.log(0);
    }else for (var i=0; i<arguments.length; i++){
        producto = producto * arguments[i];
    }console.log(producto);
 }
 multiplicarArgumentos(1);
 
 function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    cont = 0;
    for (i=0; i<array.length; i++){
        if (array[i] > 18){
            cont ++;
        }
    }console.log(cont);
 }
 cuentoElementos([13,45,1,1234,32,25]);
 
 function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
    switch (numeroDeDia){
        case 1: console.log("Es fin de semana");
        break;
        case 2: console.log("Es día laboral");
        break;
        case 3: console.log("Es día laboral");
        break;
        case 4: console.log("Es día laboral");
        break;
        case 5: console.log("Es día laboral");
        break;
        case 6: console.log("Es día laboral");
        break;
        case 7: console.log("Es fin de semana");
        break;
    }
 }
 diaDeLaSemana(7);
 
 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    var palabra = num.toString();
    palabra1 = palabra.split("");
    if (palabra1[0] == 9){
        console.log(true)
    }else console.log(false);
 }
 empiezaConNueve(90);
 
 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    elemento = array[0];
    for (i=1; i<array.length; i++){
        if (elemento !== array[i]){
            console.log(false);
            return false;
        }
    }
        console.log(true);
 }
 
 todosIguales([3,3]);
 
 function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    var meses = [];
    var cont = 0;
    for (i=0; i<array.length; i++){
        if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
            meses.push(array[i]);
        }
    }if (meses.length === 3)console.log(meses)
    else console.log("No se encontraron los meses pedidos");
 }
 mesesDelAño(["Enero", "Noviembre"]);
 
 function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    var tabla = [0,1,2,3,4,5,6,7,8,9,10];
    //var final = [];
    //for (var i=0; i<tabla.length; i++){
        var final = tabla.map(function(num){
            return num * 6;
        }); console.log(final);
}
tablaDelSeis();
 

 
 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    mayor = [];
    for (i=0; i<array.length; i++){
        if (array[i] > 100){
            mayor.push(array[i]);
        }
    }console.log(mayor);
 }
 mayorACien([5,99, 101,266]);