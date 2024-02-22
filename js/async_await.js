// Define uma função para gerar um número aleatório dentro de um intervalo
function rand(min, max) {
  min *= 1000; // Converte o valor mínimo para milissegundos
  max *= 1000; // Converte o valor máximo para milissegundos
  return Math.floor(Math.random() * (max - min) + min); // Retorna um número aleatório dentro do intervalo especificado em milissegundos
}

// Define uma função que retorna uma promessa que será resolvida após um determinado tempo
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('caiu no erro'); // Se o argumento 'msg' não for uma string, rejeita a promessa com uma mensagem de erro
        return;
      }
      resolve(msg + ' - PROMISE CONCLUIDA'); // Caso contrário, resolve a promessa com a mensagem passada concatenada com um indicador de conclusão
    }, tempo); // Aguarda o tempo especificado antes de resolver a promessa
  });
}

// Define uma função assíncrona chamada 'executa' para executar as promessas sequencialmente
async function executa() {
  try { // Inicia um bloco try-catch para lidar com erros potenciais
    const fase1 = esperaAi('Fase 1', rand(0, 1)); // Inicia a execução da promessa para a fase 1 e armazena a promessa em 'fase1'
    console.log(fase1); // Loga a promessa 'fase1' (ainda pendente)

    // Define um temporizador para logar uma mensagem após 1100ms
    setTimeout(function() {
      console.log('Essa promise estava pendente',fase1); // Loga uma mensagem indicando que a promessa estava pendente, passando a promessa 'fase1' como argumento
    }, 1100);

    const fase2 = await esperaAi('Fase 2', rand(0, 3)); // Aguarda até que a promessa para a fase 2 seja resolvida e armazena o resultado em 'fase2'
    console.log(fase2); // Loga o resultado da promessa 'fase2'

    const fase3 = await esperaAi('Fase 3', rand(0, 3)); // Aguarda até que a promessa para a fase 3 seja resolvida e armazena o resultado em 'fase3'
    console.log(fase3); // Loga o resultado da promessa 'fase3'

    console.log('Ultima fase: ' + fase3); // Loga uma mensagem indicando que esta é a última fase e o resultado da promessa 'fase3'
  } catch(e) { // Captura e trata qualquer erro que ocorra dentro do bloco try
    console.log(e); // Registra o erro no console
  }
}

executa(); // Chama a função 'executa' para iniciar a execução do código assíncrono


/*
// Inicia a primeira promessa, simulando uma espera de tempo aleatório para a fase 1
esperaAi('Fase 1', rand(0,3))
  // Quando a primeira promessa é resolvida, imprime o resultado da fase 1 no console
  .then(fase => {
    console.log(fase);
    // Retorna outra promessa para a fase 2, encadeando-a na próxima etapa
    return esperaAi('Fase 2', rand(0,3));
  })
  // Quando a segunda promessa é resolvida, imprime o resultado da fase 2 no console
  .then(fase => {
    console.log(fase);
    // Retorna outra promessa para a fase 3, encadeando-a na próxima etapa
    return esperaAi('Fase 3', rand(0,3));
  })
  // Quando a terceira promessa é resolvida, imprime o resultado da fase 3 no console
  .then(fase => {
    console.log(fase);
    // Retorna o resultado da fase anterior, passando-o adiante
    return fase;
  })
  // Quando a última promessa é resolvida, imprime o resultado final da última fase na cadeia de promessas
  .then(fase => {
    console.log('Ultima fase: ' + fase);
  })
  // Captura qualquer erro que ocorra durante a execução da cadeia de promessas e o imprime no console
  .catch(error => {
    console.log(error);
  });
 */

/*
Esse código executa três fases de operações assíncronas usando promessas. Cada 
fase é representada por uma chamada assíncrona da função esperaAi, que retorna uma 
promessa. As fases são executadas sequencialmente dentro de uma função assíncrona 
executa, que utiliza await para esperar que cada promessa seja resolvida antes 
de continuar para a próxima fase.
*/