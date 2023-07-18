//ejemplo 1
//De forma horizontal
//var deportes = {conBalon: ["Football", "Basketball", "Rugby"], sinBalon: ["Boxeo", "Surf", "Trekking"]};
//De forma vertical
var deportes = {
    conBalon: ["Football", "Basketball", "Rugby"], 
    sinBalon: ["Boxeo", "Surf", "Trekking"]
};

//ejemplo 2 con DOT-Notation
var persona = {nombre: "Lucas", edad: 26, estudios: {esProgramador: true}};
persona.nombre = "Martin"; //asigna o cambia el valor a la propiedad
persona.deportes = ["Football", "Basketball", "Tenis"]; // crear otra propiedad
delete persona.deportes; //borra una propiedad
console.log(persona);

//crear función dentro de un objeto
//var misFunciones = {saludar: function(){console.log("Hola!")}}; //horizontal
var misFunciones = {
    saludar: function(){
        console.log("Hola!")}
    };
misFunciones.saludar();

//ejemplo 3 con Bracket-Notation
persona["comidas"] = ["Pizza", "Carne", "Lasagna"];
console.log(persona);

//ejemmplo 4 crear propiedades con asignación de parámetros
var comidas = {};
var diferenciaNotaciones = function(propUno, propDos){
    comidas[propUno] = ["Frutas", "Verduras"];
    comidas[propDos] = ["Pizza", "Perro", "Salchipapa"];
}; 
diferenciaNotaciones("saludables", "noSaludables");
console.log(comidas);

console.log(Object.keys(persona));//devuelve las claves del objeto
console.log(Object.values(persona));//devuelve los valores de las claves