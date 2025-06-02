import datos from './data.js';

// 1) Filtrar los datos por sexo
function filtrarPorSexo(datos, sexo) {
  return datos.filter((persona) => persona.sexo === sexo);
}

// 2) Filtrar datos por nacionalidad
function filtrarPorNacionalidad(datos, nacionalidad) {
  return datos.filter((persona) => persona.nacionalidad === nacionalidad);
}

// 3) Determinar cuáles son mayores de edad (18+)
function mayoresDeEdad(datos) {
  const hoy = new Date();
  return datos.filter((persona) => {
    const nacimiento = new Date(persona.fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad >= 18;
  });
}

// 4) Ordenar ascendente y descendente por nombre y apellido
function ordenarPorNombre(datos, asc = true) {
  return [...datos].sort((a, b) =>
    asc ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre)
  );
}

function ordenarPorApellido(datos, asc = true) {
  return [...datos].sort((a, b) =>
    asc
      ? a.apellido.localeCompare(b.apellido)
      : b.apellido.localeCompare(a.apellido)
  );
}

// 5) Filtrar aquellos que tienen el mismo idioma
function filtrarPorIdioma(datos, idioma) {
  return datos.filter((persona) => persona.idiomas.includes(idioma));
}

// 6) Filtrar aquellos que tienen los mismos hobies
function filtrarPorHobie(datos, hobie) {
  return datos.filter((persona) => persona.hobies.includes(hobie));
}

// 7) Generar información formateada de cada persona
function formatearUsuarios(datos) {
  return datos.map(
    (persona) =>
      `Usuario: ${persona.nombre}, ${persona.apellido} / ${persona.sexo} - ${persona.fechaNacimiento}/ ${persona.nacionalidad}`
  );
}

// 8) Ordenar objetos por fecha de nacimiento (ascendente por defecto)
const ordenarPorFechaNacimiento = (datos, asc = true) => {
  return [...datos].sort((a, b) => {
    const fechaA = new Date(a.fechaNacimiento);
    const fechaB = new Date(b.fechaNacimiento);
    return asc ? fechaA - fechaB : fechaB - fechaA;
  });
};
// Ejemplo de uso:
console.log("Mujeres:", formatearUsuarios(filtrarPorSexo(datos, "F")));
console.log("Argentinos:", formatearUsuarios(filtrarPorNacionalidad(datos, "Argentina")));
console.log("Mayores de edad:", formatearUsuarios(mayoresDeEdad(datos)));
console.log("Ordenados por nombre asc:", formatearUsuarios(ordenarPorNombre(datos, true)));
console.log("Ordenados por apellido desc:", formatearUsuarios(ordenarPorApellido(datos, false)));
console.log("Ordenados por fecha de nacimiento asc:", formatearUsuarios(ordenarPorFechaNacimiento(datos, true)));
console.log("Ordenados por fecha de nacimiento desc:", formatearUsuarios(ordenarPorFechaNacimiento(datos, false)));
console.log("Hablan Inglés:", formatearUsuarios(filtrarPorIdioma(datos, "Inglés")));
console.log("Les gusta Leer:", formatearUsuarios(filtrarPorHobie(datos, "Leer")));

// console.log(formatearUsuarios(datos));
