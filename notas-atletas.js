//Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let nome = atleta.nome;
    let notas = atleta.notas.sort();
    let notasComputadas = notas.slice(1,4);
    //Calcula a Média
    let soma = 0;
    notasComputadas.forEach(function(nota){
      soma = soma + nota;
    })
    let media = soma / notasComputadas.length;
    
    //Mostra no Console
    console.log(`Atleta: ${nome}`)
    console.log(`Notas Obtidas: ${notas}`)
    console.log(`Média Válida: ${media}`)
    console.log("--")
  }
