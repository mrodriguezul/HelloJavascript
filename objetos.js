function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}


let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'correo@gmail.com',
    direccion: {
        ciudad: 'Trujillo',
        pais: 'Perú'
    },
    saludar: function(){
        console.log(`Hola, soy ${persona.nombre} ${this.apellido}`);
    },
    saludar2(){
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
}
console.log(persona.nombre);
persona.saludar()
persona.saludar2();

let funciones = Object.getOwnPropertyNames(persona).filter(propiedad => typeof persona[propiedad] === 'function');
console.log(funciones);

persona.despedida = function(){
    console.log(`Adios ${persona.nombre}`);
}
persona.despedida();
delete persona.saludar2;

funciones = Object.getOwnPropertyNames(persona).filter(propiedad => typeof persona[propiedad] === 'function');
console.log(funciones);

/*nuevos pruebas persona*/
console.log("nuevos pruebas persona -----------------");
let juanita = new Persona('Juanita', 'Perez', 'juanita@gmail.com');
console.log(juanita.nombreCompleto());
Persona.prototype.saludar = function(){
    console.log(`Hola, soy ${this.nombre}`);
};

juanita.saludar();

let datosPersona = ["Juan", "Perez", "juanperez@gmail.com"];
let juan = new Persona(...datosPersona);

//Nueva forma de crear objetos
class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;        
    }

    mostrarUsuario(){
        console.log(`Usuario: ${this.usuario}`);
    }
}

let usuario = new Usuario('jperez', '1234');
usuario.mostrarUsuario();



