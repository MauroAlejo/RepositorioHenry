// Forma 1
function sumaTres(x){
    return x +3;
}

//forma 2
var sumaTres = function(x){
    return x+3;
};

//forma 3
var sumaTres = (x) => {
    return x+3;
};

sumaTres(5);


//función dentro de otra función
function cuidadoConElConsoleLog(nombre){
    console.log(nombre);
    return nombre;
}

function otraFuncion(){
    return "El valor a retornar por la función cuidadoConElConsoleLog es " + cuidadoConElConsoleLog("Mauro");
}

