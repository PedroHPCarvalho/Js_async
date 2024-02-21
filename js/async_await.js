function rand (min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg,tempo){
  return new Promise((resolve,reject) => {
  setTimeout(() => {
      if(typeof msg !== 'string') {
          reject('caiu no erro');
          return;
      }
          resolve(msg + ' - PROMISE CONCLUIDA');   
      }, tempo);
  });
}

// esperaAi('Fase 1', rand(0,3))
//   .then(fase => {
//     console.log(fase)
//     return esperaAi('Fase 2', rand(0,3))
//   })
//   .then(fase => {
//     console.log(fase)
//     return esperaAi('Fase 3', rand(0,3))
//   })
//   .then(fase => {
//     console.log(fase)
//     return (fase)
//   })
//   .then(fase => {
//     console.log('Ultima fase: ' + fase)
//   })
//   .catch(error => {console.log(error)});



async function executa(){
  try{
    const fase1 = esperaAi('Fase 1', rand(0,1));
    console.log(fase1)

    setTimeout(function(){
      console.log('Essa promise estava pendente',fase1)
    }, 1100)
    const fase2 = await esperaAi('Fase 2', rand(0,3));
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3', rand(0,3));
    console.log(fase3)
    console.log('Ultima fase: ' + fase3)
  } catch(e) {
    console.log(e);
  }
  
}

executa();

/*
// 3 estados das promises
//pending -> pendente
//quando ela é ordenada a ser executada
//fullfilled -> resolvida
//rejected -> rejeitada
*/