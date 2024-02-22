// Função para gerar um número aleatório dentro de um intervalo em milissegundos
function numAleat(min, max) {
  min *= 1000; // Converte o valor mínimo para milissegundos
  max *= 1000; // Converte o valor máximo para milissegundos
  return Math.floor(Math.random() * (max - min) + min); // Retorna um número aleatório dentro do intervalo especificado em milissegundos
}

// Função que retorna uma promessa que será resolvida após um determinado tempo
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') // Verifica se o argumento 'msg' não é uma string
      reject(new Error()); // Rejeita a promessa com um erro
    setTimeout(() => {
      resolve(msg); // Resolve a promessa com a mensagem após o tempo especificado
    }, tempo); // Espera o tempo especificado antes de resolver a promessa
  });
}

// Inicia a cadeia de promessas
esperaAi('Conexão com o BD', numAleat(1, 3))
  // Quando a primeira promessa é resolvida, imprime a mensagem no console e continua com a próxima promessa
  .then(resposta => {
    console.log(resposta);
    // Retorna uma nova promessa para buscar dados da BASE
    return esperaAi('Buscando dados da BASE', numAleat(1, 3));
  })
  // Quando a segunda promessa é resolvida, imprime a mensagem no console e continua com a próxima promessa
  .then(resposta => {
    console.log(resposta);
    // Retorna uma nova promessa para tratar os dados da BASE
    return esperaAi('Tratando os dados da BASE', numAleat(1, 3));
  })
  // Quando a terceira promessa é resolvida, imprime a mensagem no console
  .then(resposta => {
    console.log(resposta);
  })
  // Após todas as promessas serem resolvidas, imprime uma mensagem de conclusão
  .then(() => {
    console.log('Exibe dados na tela');
  })
  // Captura e trata qualquer erro que ocorra durante a execução da cadeia de promessas
  .catch(er => {
    console.log('ERROR:', er);
  });

// Esta linha é executada imediatamente após o início da cadeia de promessas
console.log('EXIBIDO ANTES DO PROMISE');

/*
Este código simula uma sequência de operações assíncronas em JavaScript, onde cada 
operação é representada por uma promessa. As promessas são encadeadas usando then, 
permitindo que cada operação espere até que a anterior seja concluída antes de iniciar. 
O catch no final lida com quaisquer erros que ocorram durante a execução da 
cadeia de promessas. A última linha é executada imediatamente após o início da 
cadeia de promessas, sem esperar que ela seja concluída.
*/