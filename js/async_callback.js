function numAleat (min, max){
  /*Isso define uma função chamada numAleat que 
  recebe dois parâmetros, min e max, representando o 
  intervalo no qual o número aleatório será gerado. */

  min *= 1000;
  max *= 1000;
  // Aqui, min é multiplicado por 1000. 
  // Isso é feito para trabalhar com números inteiros, 
  // presumivelmente para representar milissegundos, 
  // por exemplo, se min for 0.5, após essa operação 
  // será 500.

  return Math.floor(Math.random() * (max-min) + min);
  // Aqui está a essência da função:

  // Math.random(): Retorna um número aleatório 
  // entre 0 (inclusive) e 1 (exclusivo).

  // max - min: Isso define o intervalo de números possíveis.

  // Math.random() * (max - min): Isso multiplica o número 
  // aleatório pela amplitude do intervalo, então você obtém 
  // um número entre 0 e a diferença entre max e min.

  // Math.floor(...): Arredonda para baixo para garantir que o resultado 
  // seja um número inteiro.

  // + min: Soma min ao resultado para ajustar o intervalo de números 
  // gerados para começar de min até max.
}

function esperaAi(msg,tempo,cb){
// função executa uma ação após um certo período de tempo, 
// simulando uma espera assíncrona.
// que recebe três parâmetros:
//  - msg: A mensagem a ser exibida após o tempo especificado.

//  - tempo: O tempo, em milissegundos, que a função deve esperar 
//  antes de executar a ação.

//  - cb: Uma função de retorno de chamada opcional que será 
//  chamada após a execução da ação. Uma callback é uma função que é 
//  passada como argumento para outra função e é chamada dentro dessa 
//  função externa após a conclusão de uma operação assíncrona 
//  ou de algum evento específico.

  setTimeout(() => {
  // função JavaScript que aguarda um determinado período de tempo 
  // (especificado em milissegundos) antes de executar uma determinada função
    console.log(msg);
    //exibi a mensagem msg no console após o tempo especificado.
    if(cb) cb();
    // Verifica se uma função de retorno de chamada foi fornecida (cb). Se 
    // sim, essa função é chamada após a execução da ação principal.
  },tempo)
  // Em resumo, esta função esperaAi espera um certo tempo 
  // (especificado pelo parâmetro tempo), e então exibe a mensagem 
  // msg no console. Se uma função de retorno de chamada (cb) for fornecida, 
  // ela será chamada após a exibição da mensagem.
}

// Executa três mensagens em sequência, cada uma após um tempo aleatório
esperaAi('FRASE 1', numAleat(1, 3), () => { // Exibe "FRASE 1" após um tempo aleatório
  esperaAi('FRASE 2', numAleat(1, 3), () => { // Exibe "FRASE 2" após um tempo aleatório
    esperaAi('FRASE 3', numAleat(1, 3)); // Exibe "FRASE 3" após um tempo aleatório
  });
});
