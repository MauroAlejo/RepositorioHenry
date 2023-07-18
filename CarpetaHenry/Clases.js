//metodo 1 de definir una clase
function Auto (puertas,color,marca,año,ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
}

var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", 2018, 4);
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);

//metodo 2 de definir una clase
class Carro {
    constructor(puertas,color,marca,año,ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    }
    informacion (){//metodos se realizan fuera del constructor pero dentro de la Clase
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miSegundoAuto = new Carro(4, "Blanco", "Fiat", 2015, 4);
console.log(miSegundoAuto);
miSegundoAuto.informacion();

//ejemplo de como llamar un parámetro dos veces de forma distinta
class Football{
    constructor(jugador){
        this.jugador = jugador;
    }
    ObtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new Football("Messi");
var brasil = new Football("Pelé");
argentina.ObtenerNombre();
brasil.ObtenerNombre();

//crear métodos con la opción Prototype
Array.prototype.mayoresQueTres = function(){
    var arreglomodificado = [];
    for (let i=0; i<this.length; i++){
        if (this[i] > 3){
            arreglomodificado.push(false);
        }else {
            arreglomodificado.push(this[i]);
        }
    }return arreglomodificado;
}

var arreglo = [1,2,3,4,5];
var nuevoarreglo = arreglo.mayoresQueTres();

console.log(nuevoarreglo);

class latinoamerica {
    constructor(){
        this.paises = [];
    }
}

latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
}

var continente = new latinoamerica();
continente.agregarPais("México");
console.log(continente.paises);

//Extensión de clases
class persona{ // clase principal
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log("Hola, mi nombre es " + this.nombre + ".Tengo " + this.edad + " años");
    }
}

class programador extends persona{ // clase que hereda
    constructor(nombre,edad,añosDeExperiencia){
        super(nombre,edad); //la palabra reservada super indica los parámetros que se heredarán
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear(){
        console.log("Soy " + this.nombre + ", tengo " + this.añosDeExperiencia + " años de experiencia en código");
    }
}

var martin = new persona("Martin",26);
var Programador = new programador("Samuel",45,20);
martin.saludar();
Programador.codear();