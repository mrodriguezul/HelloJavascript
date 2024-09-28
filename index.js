console.log("Hello i am back!!!");
const semilla = 100;
/*for(let i = 0;i<10;i++){
    console.log(i);
}*/

/*
let a = 10;
console.log(a);
{
let a = 20;
console.log(a);
//semilla = 30;
}
console.log(a);
console.log(semilla);
*/

/*var simbolo = Symbol("mi-simbolo");
console.log(simbolo);
console.log(simbolo.description);*/
//**** */
/*
let miCadena = '1';
console.log(miCadena);

if(miCadena === 1){
    console.log("Son iguales z");
}else{
    console.log("No son iguales");
}
let testIndefinido;
console.log(testIndefinido);
*/
//probando código de comillas invertidas
/*
let cadena1 = "Hola";
let cadena2 = "lacayos!";

console.log("${cadena1} ${cadena2}");
console.log(`${cadena1} ${cadena2}`);
console.log(`\"${cadena1}\" \"${cadena2}\"`);
*/

//probando números.
/*let entero = 10;
let decimal = 10.5;
let exponente = 2e3;
let infinito = Infinity;
let negativoInfinito = -Infinity;
let noEsUnNumero = NaN;
console.log(entero, decimal, exponente, infinito, negativoInfinito, noEsUnNumero);
console.log(typeof entero, typeof decimal, typeof exponente, typeof infinito, typeof negativoInfinito, typeof noEsUnNumero);
console.log(negativoInfinito);
*/
//probando exponenciación
/*let modulo = 10 % 3;
let exponente2 = 2 ** 3;
console.log(modulo, exponente2);
*/

//probando preción de números
/*let decimal1 = 1.323;
let decimal2 = 0.243;
let resultado = decimal1 + decimal2;
let resultado2 = resultado.toFixed(2); //esto lo convierte en string
//let resultado2 = (decimal1 * 10 + decimal2 * 10) / 10; //esto lo convierte en número
//let resultado2 = parseFloat(resultado.toFixed(2)); //esto lo convierte en número
let resultado3 = resultado.toPrecision(2);
//toFixed() considera los decimales y toPrecision() considera el número de dígitos en total

console.log(resultado, Number(resultado2), resultado2, resultado3);
//console.log(typeof resultado, typeof resultado2, typeof resultado3);
*/

//probando elementos matemáticos
/*let numeroBase = 3.1456;
console.log("numeroBase: ",numeroBase);
console.log("Math.abs(numeroBase): ",Math.abs(numeroBase));//valor absoluto
console.log("Math.ceil(numeroBase): ",Math.ceil(numeroBase));//redondea hacia arriba
console.log("Math.floor(numeroBase):",Math.floor(numeroBase));//redondea hacia abajo
console.log("Math.round(numeroBase):",Math.round(numeroBase));//redondea al entero más cercano
console.log("Math.sqrt(9):",Math.sqrt(9));//raíz cuadrada
console.log("Math.pow(3, 2):",Math.pow(3, 2));//potencia
console.log("Math.min(1, 2, 3, 4, 5):",Math.min(1, 2, 3, 4, 5));//mínimo
console.log("Math.max(1, 2, 3, 4, 5)):",Math.max(1, 2, 3, 4, 5));//máximo
console.log("Math.random():",Math.random());//número aleatorio
console.log("Math.round(Math.random() * 100):",Math.round(Math.random() * 10));//número aleatorio entre 0 y 100
console.log("Math.floor(Math.random() * 100):",Math.floor(Math.random() * 10));//número aleatorio entre 0 y 100
console.log("Math.floor(Math.random() * 100) + 1:",Math.floor(Math.random() * 10) + 1);//número aleatorio entre 1 y 100
console.log("Math.PI:",Math.PI);//valor de PI
console.log("Math.E:",Math.E);//valor de E
console.log("Math.log(10):",Math.log(10));//logaritmo natural
console.log("Math.exp(3):",Math.exp(3));//e^3
*/

//probando switch
/*let aleatorio = Math.round(Math.random() * 10);
console.log(`aleatorio: ${aleatorio}`);

switch (aleatorio) {
    case 0: console.log("El número es 0");
        break;
    case 1: console.log("El número es 1");
        break;
    case 2: console.log("El número es 2");
        break;
    case 3: console.log("El número es 3");
        break;
    case 4: console.log("El número es 4");
        break;
    case 5: console.log("El número es 5");
        break;
    case 6: console.log("El número es 6");
        break;
    case 7: console.log("El número es 7");
        break;
    case 8: console.log("El número es 8");
        break;
    case 9: console.log("El número es 9");
        break;
    case 10: console.log("El número es 10");
        break;
    default: console.log("Otro número");
}*/

//probando ciclo for
let listaFrutas = ["manzana", "pera", "uva", "sandía", "mango"];
let objetoPersona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25
};
let listaPersonas = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 25
    },
    {
        nombre: "María",
        apellido: "Gómez",
        edad: 30
    },
    {
        nombre: "Pedro",
        apellido: "Jiménez",
        edad: 35
    }
];
/*for(fruta of listaFrutas){
    console.log(`Esta fruta: ${fruta}`);
}

for(fruta in listaFrutas){
    console.log(`Esta fruta 2: ${listaFrutas[fruta]}`);
}*/
/*

for(atributo in objetoPersona){
    console.log(`Este atributo: ${atributo}`);
    console.log(`Este valor: ${objetoPersona[atributo]}`);
}
for(atributo of listaPersonas){
    console.log(`Este atributo 2: ${atributo.nombre}`);    
}
console.log("**********");
for(persona of listaPersonas){
    for(attr in persona){
        console.log(`${attr} : ${persona[attr]}`);
    }
}
*/
//probando funciones
//mddelo tradicional de una función
/*function welcomeMessage(name){
    return `Hi ${name}, welcome again!`;
}
console.log(welcomeMessage("Juan"));

//modelo de función en variable
let suma = function(a, b){
    return a + b;
};
console.log(suma(5, 3));

let resta = (a, b)=>{
    return a - b;
};
console.log(resta(5, 3));


//modelo de arrow function
let welcomeMessage2 = (name) => `Hi ${name}, welcome again!`;
console.log(welcomeMessage2("María"));

//modelo de arrow function con más de un parámetro
let welcomeMessage3 = (name, age) => `Hi ${name}, welcome again! You are ${age} years old.`;

let objeto = {
    name: "Juan",
    surname: "Pérez",
    fullName: function(){
        return `${this.name}, ${this.surname}`;
    },
    fullName2: ()=>{//this one dosn't work with the reserved word "this"
        return `${this.name}, ${this.surname}`;
    }
}
console.log(objeto.name);
console.log(objeto.surname);
console.log(objeto.fullName());
console.log(objeto.fullName2());
*/

//probando closures
/*function helloMate(){
    let message = "Hello ";
    return function(name){
        return message + name;
    }
}
let hello = helloMate();

console.log(hello("Juan"));
console.log(hello("María"));
console.log(hello("Pedro"));
*/

//probando arrays
/*let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let listaNumeros2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
let languages = Array("Java", "JavaScript", "Python", "Ruby", "C#", "C++");
let lotteryNumbers = Array(49);
let mixArray = ["Juan", 25, true, null, undefined, ["María", 30, false], {nombre: "Pedro", edad: 35, casado: true}];

console.log(listaNumeros);
console.log(listaNumeros2);
console.log(lotteryNumbers);
console.log(languages);

lotteryNumbers[0] = 10;
lotteryNumbers[1] = 20;
lotteryNumbers[2] = 30;
console.log(lotteryNumbers);

for(var element of lotteryNumbers){
    console.log(`Lenguaje: ${element}`);
}
console.log(mixArray);
console.log("**********");
mixArray.forEach(element => {
    console.log(`Lenguaje: ${element} - ${typeof element}`);    
});

mixArray.pop();//return the element removed
console.log(mixArray);
mixArray.push("Pedro");//return the new length of the array
*/

//probando métodos de transformación de arrays
/*let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let languages = ["Java", "JavaScript", "Python", "Ruby", "C#", "C++"];

let newListaNumbers = listaNumeros.map(n=>n*10);
let sumatoria = 0;
newListaNumbers.forEach(n=>sumatoria+=n);

console.log(`Lista Números: ${listaNumeros}`);
console.log("Número x 10:",newListaNumbers);
console.log("Sumatoria:",sumatoria);

console.log("Lenguajes:",languages);

let ListJava = languages.map(l=>(l.includes("Java"))?l:null);//pendiente de revisar
console.log(ListJava);
*/

//probando métodos de filtrado de arrays
/*let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let languages = ["Java", "JavaScript", "Python", "Ruby", "C#", "C++"];

let listaPares = listaNumeros.filter(n=>n%2===0);
let lenguajesJava = languages.filter(l=>l.includes("Java"));
console.log(listaPares);
console.log(lenguajesJava);
*/
//probando métodos de reducción de arrays
/*let listaNumeros = [1, 2, 3, 4,5,6,7];
let sumatoria = listaNumeros.reduce((a, c)=>a+c, 0);//a es el acumulador y c es el valor actual y 0 es el valor inicial del acumulador
console.log(sumatoria);
let sumatoria2 = listaNumeros.reduce((a, c)=>{
    //console.log(`Acumulador: ${a}`);
    //console.log(`Valor actual: ${c}`);
    a += c;
    return a;
}, 0);
console.log(sumatoria2);

let lstParesImpares = listaNumeros.reduce((a, c)=>{
    (c%2===0)?a[0].push(c):a[1].push(c);
    return a;
}, [[], []]);
console.log(lstParesImpares);

let lstParesImpares2 = listaNumeros.reduce((a, c)=>{
    if(a['pares']===undefined){a['pares']=0;}
    if(a['impares']===undefined){a['impares']=0;}
    (c%2===0)?a['pares']++:a['impares']++;
    return a;
}, {});
console.log(lstParesImpares2);
*/

//probando métodos de búsqueda de arrays
/*let listaNumeros = [1, 2, 3, 4,5,6,7];
let languages = ["Javax", "JavaScript", "Python", "Ruby", "C#", "C++"];

let numBuscado = listaNumeros.find(n=>n===0);
console.log(numBuscado);
let lenguajeJava = languages.findIndex(l=>l.includes("Java"));
console.log(lenguajeJava);*/

//probando métodos de copia de arrays
/*let listaNombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Marta"];//de izquierda a derecha indice inicia en 0, de derecha a izquierda indice inicia en -1
let listaNombres2 = listaNombres.slice(1,-2);
let listaNombres3 = listaNombres.slice();// se mantienen los valores originales
console.log(listaNombres2);
console.log(listaNombres3);*/

//probando spread operator
let listaNombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Marta"];
let listaNombres2 = ["Carlos", "Lucía", "Pablo"];
let listaNombres3 = [...listaNombres];// (se copian los valores, más no la referencia) se mantienen los valores originales y se pueden agregar nuevos valores
let listaNombres4 = [...listaNombres, ...listaNombres2];// se mantienen los valores originales y se pueden agregar nuevos valores
let listaNombres5 = [...listaNombres, "Carlos", "Lucía", "Pablo"];// se mantienen los valores originales y se pueden agregar nuevos valores

//aplicado a una función
let suma = (a, b, c)=>a+b+c;
let valores = [1, 2, 3];
console.log(suma(...valores));

