// Define uma função chamada numAleat que gera um número aleatório dentro de um intervalo definido.
function numAleat (min, max){
  // Multiplica os valores mínimo e máximo por 1000 para trabalhar com segundos em vez de milissegundos.
  min *= 1000;
  max *= 1000;
  // Usa Math.random() para gerar um número aleatório entre 0 e 1, então multiplica pela diferença entre max e min para gerar um número dentro do intervalo desejado.
  // Usa Math.floor() para arredondar o número para baixo, garantindo que seja um número inteiro.
  return Math.floor(Math.random() * (max-min) + min);
}

// Define uma função chamada esperaAi que simula uma operação assíncrona que espera um tempo determinado antes de executar uma ação.
function esperaAi(msg,tempo){
  // Usa setTimeout() para agendar a execução de uma função após um determinado tempo.
  setTimeout(() => {
    console.log(msg); // Imprime a mensagem passada como parâmetro no console.
  },tempo); // O tempo determina quanto tempo esperar antes de executar a função.
}

// Chama a função esperaAi três vezes para simular a execução assíncrona de três operações com mensagens diferentes e tempos de espera aleatórios.
esperaAi('FRASE 1', numAleat(1,3)); // Simula uma operação assíncrona para "FRASE 1" com um tempo de espera aleatório.
esperaAi('FRASE 2', numAleat(1,3)); // Simula uma operação assíncrona para "FRASE 2" com um tempo de espera aleatório.
esperaAi('FRASE 3', numAleat(1,3)); // Simula uma operação assíncrona para "FRASE 3" com um tempo de espera aleatório.

/*
Este código cria três operações assíncronas que imprimem mensagens no console 
após um tempo de espera aleatório. Essas operações são simuladas pela função esperaAi, 
enquanto a função numAleat é usada para gerar os tempos de espera aleatórios.
Este código simula a execução não assincrona do código
*/