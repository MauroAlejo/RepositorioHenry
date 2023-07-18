/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
    // El valor de cada propiedad la recibirá por parámetro.
    // Además, esta clase debe tener un método llamado "saludar".
    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
    // Retornar la clase.
    // Tu código:
    class Usuario {
        constructor(usuario,nombre,email,password){
            this.usuario = usuario;
            this.nombre = nombre;
            this.email = email;
            this.password = password;
        }    
            saludar() {
            return ("hola, mi nombre es " + this.nombre);
        }
 }
}

 var usuario1 = new Usuario ("MauroAlejo","Mauricio","mao@","maal12345");
 console.log(usuario1);
 usuario1.saludar();
 crearUsuario();
 
 function agregarMetodoPrototype(Usuario) {
    // Agrega un método al prototipo de "Usuario".
    // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
    // Tu código:
    Usuario.prototype.saludar = function(){
        console.log("Hello World!");
    }
 }
 
 function agregarStringInvertida() {
    // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse".
    // [PISTA]: necesitarás utilizar el objeto "this".
    
    // Método 1
    String.prototype.reverse = function(){
        return this.split("").reverse().join("");
    }

    // Método 2
    String.prototype.reverse = function(){
        var invertida = "";
        for (i=this.length-1; i>=; i--){
            invertida = invertida + this[i];
        }
        return invertida;
    }

 /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre,apellido,edad,domicilio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
    }
    detalle(){
        return {nombre: this.nombre, apellido: this.apellido, edad: this.edad, domicilio: this.domicilio};

    }
 }
 
 function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
    // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
    // Recibirás las propiedades por parámetro.
    // Retornar la instancia creada.
    // Tu código:
    var persona1 = new Persona(this.nombre, this.apellido, this.edad, this.domicilio);
    return persona1;
 }
 
 function agregarMetodo() {
    // La función agrega un método "datos" a la clase "Persona".
    // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
    // Ejemplo: "Juan, 22 años".
    // Tu código:
    Persona.prototype.datos = function(){
        return this.nombre + " , " + this.edad + " años";
    }
 }}