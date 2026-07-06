// Objetivo: desenvolver um sistema de Bingo executado pelo terminal em JavaScript, aplicando os conteudos da UC2.

/*

**EQUIPE 5:**

1. DANILO DE FREITAS DA SILVA
2. EDINALDO DA SILVA RAMOS
3. EVELLYN AMELIA RODRIGUES GOMES
4. JOAO VITOR ATILA GOMES DOS SANTOS
5. THAMIRES VITÓRIA MUNIZ DA SILVA

*/

//------------------------------
// BLOCO 1 - VARIAVEIS
//------------------------------


//A Vriavel/Vetor que armazena todos os numeros ja sorteados.
let numerosSorteados = [];

//A Variavel/Vetor que vai armazena os numeros disponiveis para sorteio.
let numerosDisponiveis = [];

//Criação de variavel para criar os numeros que vão ser sorteados, todos eles vão ser adicionados em uma array.
for (let i = 1; i <= 75; i++) {
  numerosDisponiveis.push(i);
}

// Variavel para guardar informacoes do sistema.
let sistema = {
  ultimoNumero: null
};




//------------------------------
// PREPARANDO O SISTEMA PARA INICIAR UM NOVO BINGO
// BLOCO 2 - FUNCOES:
//------------------------------



function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    console.log("Todos os numeros ja foram sorteados!");
    return;
  }

  // Criação dos numeros aleatorios (Math.random), armazenando os mesmos aleatoriamente 
  let indice = Math.floor(Math.random() * numerosDisponiveis.length);
  let numero = numerosDisponiveis[indice];

  // Remove o numero sorteado da lista
  numerosDisponiveis.splice(indice, 1);

  // Guardando no historico
  numerosSorteados.push(numero);

  sistema.ultimoNumero = numero[-1];

  console.log("Numero sorteado: " + numero);
}

function inicializarVetores() {

  // Limpa os vetores/variaveis caso ja possuam informacoes.
  numerosSorteados = [];
  numerosDisponiveis = [];

  // Adiciona ao vetor/variavel todos os numeros de 1 ate 75.
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



//------------------------------
// BLOCO 3 -  HISTORICO + PESQUISA + ORDENACAO
//------------------------------



// Funcao que exibe o historico de numeros sorteados
function mostrarHistorico() {

  console.log("-".repeat(48));

  console.log("Historico de numeros sorteados:");
  for (let i = 0; i < numerosSorteados.length; i++) {
    console.log(`Numero sorteado: ${numerosSorteados[i]}`);
  }

  console.log("-".repeat(48));
}

// Funcao que ordena os numeros do menor para o maior
function mostrarNumerosOrdenados() {
  let ordenados = numerosSorteados.sort((a, b) => a - b);
  // Se (a - b) for negativo, o JavaScript entende que "a" deve ficar antes de "b" no array.

  console.log("Numeros ordenados:", ordenados);
  console.log("-".repeat(48));
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

// Funcao que vai registrar total de numeros disponiveis, Total Sorteados e ultimo numero

function mostrarRegistro() {

  let registro = {
    totalDisponivel: numerosDisponiveis.length,
    totalSorteado: numerosSorteados.length,

    ultimoNumero:
      numerosSorteados.length > 0
        ? numerosSorteados[numerosSorteados.length - 1]
        : "Nao existe"
  };

  console.log("-".repeat(10));
  console.log(registro);
  console.log("-".repeat(10));

}



//------------------------------
// BLOCO 4 - CRIAÇÃO DO MENU
//------------------------------



const readline = require("readline-sync");

let opcao = 0;

while (opcao !== 7) {
  opcao = Number(readline.question(`
+----------------------------------------------+
|                 BINGO                         |
+----------------------------------------------+
| 1 | Sortear numero                           |
| 2 | Mostrar numeros em ordem crescente       |
| 3 | Reiniciar Bingo                          |
| 4 | Historico de numeros sorteados           |
| 5 | Pesquisar numero sorteado                |
| 6 | Registro do Bingo                        |
| 7 | Sair                                     |
+----------------------------------------------+
Digite a opcao: `));

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
    mostrarRegistro()
  }else if (opcao === 7) {
    console.log("Saindo do sistema...");
  } else {
    console.log("Opcao invalida!");
  }
}
