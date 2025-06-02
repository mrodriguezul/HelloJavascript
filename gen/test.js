var objeto = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
};

var objeto2 = objeto;
var objeto3 = { ...objeto }; // Clonando o objeto
console.log("Objeto 1:", objeto);
console.log("Objeto 2:", objeto2);

objeto2.idade = 31; // Modificando o objeto2
console.log("Após modificar objeto2:");
console.log("Objeto 1:", objeto);
console.log("Objeto 2:", objeto2);
