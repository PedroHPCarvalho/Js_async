function numAleat (min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg,tempo,){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error());

    setTimeout(() => {
      resolve(msg);
    },tempo)
  });
}

esperaAi('Conexão com o BD', numAleat(1,3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', numAleat(1,3))
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(22222, numAleat(1,3))
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(er => {
    console.log('ERROR:', er)
  });

console.log('EXIBIDO ANTES DO PROMISE')

//'Tratando os dados da BASE'