const lstUsuarios = [
    { id: 1, usuario: 'Juan', password: "123" },
    { id: 2, usuario: 'Maria', password: "456" },
    { id: 3, usuario: 'Pedro', password: "789" },
    { id: 4, usuario: 'Ana', password: "101" },
    { id: 5, usuario: 'Lucas', password: "112" },
    { id: 6, usuario: 'Luis', password: "131" }
];

const lstMensaje = [
    { id: 1, usuario: 'Juan', mensaje: "Hola, como estas?" },
    { id: 2, usuario: 'Maria', mensaje: "Bien, gracias, y tu?" },
    { id: 3, usuario: 'Pedro', mensaje: "Bien tambien" },    
    { id: 4, usuario: 'Ana', mensaje: "Bien, gracias, y tu?" },
    { id: 5, usuario: 'Lucass', mensaje: "Bien tambien" },
    { id: 6, usuario: 'Luis', mensaje: "Hola, que tal?" }
];

class Usuario {
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }
    validarUsuario() {
        return lstUsuarios.find(u => u.usuario === this.usuario && u.password === this.password);
    }
    obtenerMensaje() {
        return lstMensaje.find(m => m.usuario === this.usuario);
    }
}

const usuario = new Usuario('Lucas', '112');
let usuarioValido = usuario.validarUsuario();
if(usuarioValido){
    let mensajeUsuario = usuario.obtenerMensaje();
    if(mensajeUsuario){
        console.log(`${usuario.usuario}: ${mensajeUsuario.mensaje} `);
    }else{
        console.log(`${usuario.usuario}: No hay mensajes para el usuario `);
    }
}else{
    console.log("Usuario no valido");
}
//console.log(usuario.validarUsuario());
//console.log(usuario.obtenerMensaje());

