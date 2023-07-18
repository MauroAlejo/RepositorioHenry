// ejemplo1
var devolverSaludo = function(){
    return "Hola";
};
var devolverNombre = function(){
    return "Mauro";
};
var saludar = function(cb1,cb2){
    return cb1() + " " + cb2();
};
var resultado = saludar(devolverSaludo,devolverNombre);
console.log(resultado);

//ejemplo2
var devuelvoComida = function(comida){
    return "Hoy quiero comer: " + comida;
};
var hablar = function(comida,cb){
    return cb(comida);
};
var fraseFinal = hablar("Pizza",devuelvoComida);
console.log(fraseFinal);