//Acceso a datos
class Usuario {
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }
    /*validarUsuario() {
        return lstUsuarios.find(u => u.usuario === this.usuario && u.password === this.password);
    }
    obtenerMensaje() {
        return lstMensaje.find(m => m.usuario === this.usuario);
    }*/
}
const lstUsuarios = [
    { id: 1, usuario: 'Juan', password: "123" },
    { id: 2, usuario: 'Maria', password: "456" },
    { id: 3, usuario: 'Pedro', password: "789" },
    { id: 4, usuario: 'Ana', password: "101" },
    { id: 5, usuario: 'Lucas', password: "112" },
    { id: 6, usuario: 'Luis', password: "131" }
];

const lstDataUsuarios = [
    { id: 1, usuario: 'Juan', nombres: "Juan", apellidos: "Perez", edad: 30 },
    { id: 2, usuario: 'Maria', nombres: "Maria", apellidos: "Gomez", edad: 25 },
    { id: 3, usuario: 'Pedro', nombres: "Pedro", apellidos: "Torres", edad: 35 },
    { id: 4, usuario: 'Ana', nombres: "Ana", apellidos: "Garcia", edad: 40 },
    { id: 5, usuario: 'Lucas', nombres: "Lucas", apellidos: "Lopez", edad: 45 },
    { id: 6, usuario: 'Luis', nombres: "Luis", apellidos: "Martinez", edad: 50 }
];

const lstMensaje = [
    { id: 1, usuario: 'Juan', mensaje: "Hola, como estas?" },
    { id: 2, usuario: 'Maria', mensaje: "Bien, gracias, y tu?" },
    { id: 3, usuario: 'Pedro', mensaje: "Bien tambien" },    
    { id: 4, usuario: 'Ana', mensaje: "Bien, gracias, y tu?" },
    { id: 5, usuario: 'Lucas', mensaje: "Bien tambien" },
    { id: 6, usuario: 'Luis', mensaje: "Hola, que tal?" }
];

function validarUsuario(usuario) {
    return lstUsuarios.find(u => u.usuario === usuario.usuario && u.password === usuario.password);
}


let usuario = new Usuario('Lucas', '112');

console.log("test ... inicio");
let promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let operationOk = false;
        let usuarioValido = validarUsuario(usuario);

        if(usuarioValido){
            operationOk = true;
            //resolve("Operacion exitosa");
            resolve(usuarioValido);
        }else{
            //reject("Operacion fallida");
            reject({message:"Usuario Incorrecto", code: 403});
        }
    },3000);
});

promesa.then((objResult)=>{
    console.log("... then 1");    
    console.log(objResult);
    console.log("buscando datos de ¿l usuario");
    //setTimeout(()=>{
        let objUsuario = lstDataUsuarios.find(u => u.usuario === objResult.usuario);
        return objUsuario;
    //}, 2000);

}).then((objUsuario)=>{
    console.log("... then 2");
    console.log(objUsuario);
    let objeMsg = lstMensaje.find(m => m.usuario === objUsuario.usuario);
    if(objeMsg){
        objUsuario.lastMessage = objeMsg.mensaje;
    }else{
        objUsuario.lastMessage = "No hay mensajes";
    }
    return objUsuario;
}).then((ObjResult)=>{
    console.log("... then 3");
    console.log(ObjResult);
})
.catch((objError)=>{
    console.log(objError);
});
console.log("test ... fin");