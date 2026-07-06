// Objetivo: desenvolver um sistema de Bingo executado pelo terminal em JavaScript, aplicando os conteudos da UC2.

// Variaveis
// Vetor que armazenara todos os numeros ja sorteados.
let numerosSorteados = [];
// Vetor que armazenara todos os numeros disponiveis para sorteio.
let numerosDisponiveis = [];

// criar uma interacao que adiciona no array os numeros criados
for (let i = 1; i <= 75; i++) {
  numerosDisponiveis.push(i);
}

// Variavel para guardar informacoes do sistema.
let sistema = {
  ultimoNumero: null
};

// Preparando o sistema para iniciar um novo Bingo
// Funcoes:

function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    console.log("Todos os numeros ja foram sorteados!");
    return;
  }

  // cria a aleatorizacao dos numeros a partir dos indices que serao criados aleatoriamente.
  let indice = Math.floor(Math.random() * numerosDisponiveis.length);
  let numero = numerosDisponiveis[indice];

  // remove o numero sorteado da lista
  numerosDisponiveis.splice(indice, 1);

  // guardando no historico
  numerosSorteados.push(numero);

  sistema.ultimoNumero = numero;

  console.log("Numero sorteado: " + numero);
}

function inicializarVetores() {

  // Limpa os vetores caso ja possuam informacoes.
  numerosSorteados = [];
  numerosDisponiveis = [];

  // Adiciona ao vetor todos os numeros de 1 ate 75.
  for (let i = 1; i <= 75; i++) {
    numerosDisponiveis.push(i);
  }

  sistema.ultimoNumero = null;

  console.log("Sistema inicializado com sucesso!");
}

// Preparando o sistema para reiniciar o Bingo, apagando os sorteios realizados

function reiniciarBingo() {

  // Reaproveita a funcao de inicializacao,
  // evitando repetir codigo.
  inicializarVetores();

  console.log("\n======================================");
  console.log(" Bingo reiniciado com sucesso!");
  console.log(" Todos os numeros estao disponiveis.");
  console.log(" Historico de sorteios apagado.");
  console.log("======================================\n");
}

// Historico + pesquisa + ordenacao

// Funcao que exibe o historico de numeros sorteados
function mostrarHistorico() {

  console.log("-".repeat(30));

  console.log("Historico de numeros sorteados:");
  for (let i = 0; i < numerosSorteados.length; i++) {
    console.log(`Numero sorteado: ${numerosSorteados[i]}`);
  }

  console.log("-".repeat(30));
}

// Funcao que ordena os numeros do menor para o maior
function mostrarNumerosOrdenados() {
  let ordenados = numerosSorteados.sort((a, b) => a - b);
  // Se (a - b) for negativo, o JavaScript entende que "a" deve ficar antes de "b" no array.

  console.log("Numeros ordenados:", ordenados);
  console.log("-".repeat(30));
}

// Funcao que verifica se um numero esta no array de sorteados
function pesquisarNumero(numero) {
  if (numerosSorteados.indexOf(numero) !== -1) {
    // indexOf retorna a posicao do numero no array, ou -1 se ele nao existir.
    console.log(`O numero ${numero} foi sorteado!`);
  } else {
    console.log(`O numero ${numero} nao foi sorteado!`);
  }
}

// Criacao do menu

const readline = require("readline-sync");

let opcao = 0;

while (opcao !== 6) {
  opcao = Number(readline.question(`Escolha uma opcao:
1 - Sortear numero
2 - Mostrar numeros em ordem crescente
3 - Reiniciar Bingo
4 - Historico de numeros sorteados
5 - Pesquisar numero sorteado
6 - Sair
: `));

  if (opcao === 1) {
    sortearNumero();
  } else if (opcao === 2) {
    mostrarNumerosOrdenados();
  } else if (opcao === 3) {
    reiniciarBingo();
  } else if (opcao === 4) {
    mostrarHistorico();
  } else if (opcao === 5) {
    let numero = Number(readline.question("Digite o numero a ser pesquisado: "));
    pesquisarNumero(numero);
  } else if (opcao === 6) {
    console.log("Saindo do sistema...");
  } else {
    console.log("Opcao invalida!");
  }
}