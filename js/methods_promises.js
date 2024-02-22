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

/* 
Metodos ALL,RACE,RESOLVE,REJECT
PARA TESTAR, DESCOMENTAR SEPARADAMENTE OS BLOCOS DE CÓDIGO
*/

// // Promise.all é utilizado para aguardar que todas as promessas em uma array sejam resolvidas.
// // Aqui, estamos criando duas arrays de promessas:

// // Array de promessas 'promises':
// const promises = [
//     'Primeiro Valor',                // Uma promessa resolvida imediatamente com o valor 'Primeiro Valor'.
//     esperaAi('Promise 1', 3000),     // Uma promessa que simula uma espera de 3 segundos antes de ser resolvida com o valor 'Promise 1'.
//     esperaAi('Promise 2', 500),      // Uma promessa que simula uma espera de 0.5 segundos antes de ser resolvida com o valor 'Promise 2'.
//     esperaAi('Promise 3', 1000),     // Uma promessa que simula uma espera de 1 segundo antes de ser resolvida com o valor 'Promise 3'.
//     'Outro Valor'                    // Uma promessa resolvida imediatamente com o valor 'Outro Valor'.
// ];

// // Array de promessas 'promises2':
// const promises2 = [
//     esperaAi('Promise 1', rand(1,3)),    // Uma promessa que simula uma espera de 1 a 3 segundos antes de ser resolvida com o valor 'Promise 1'.
//     esperaAi('Promise 2', rand(1,3)),    // Uma promessa que simula uma espera de 1 a 3 segundos antes de ser resolvida com o valor 'Promise 2'.
//     esperaAi('Promise 3', rand(1,3)),    // Uma promessa que simula uma espera de 1 a 3 segundos antes de ser resolvida com o valor 'Promise 3'.
//     esperaAi(1000,rand(1,3))             // Uma promessa que simula uma espera de 1 a 3 segundos antes de ser rejeitada.
// ];

// // Promise.all(promises) espera que todas as promessas da array 'promises' sejam resolvidas.
// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor); // Quando todas as promessas são resolvidas, seus valores são impressos no console.
//     })
//     .catch(function(erro){
//         console.log(erro);  // Se alguma das promessas for rejeitada, o erro é capturado e impresso no console.
//     });






// //Promise.race é utilizado para aguardar até que uma das promessas em uma array seja resolvida ou rejeitada.

// // Neste caso, estamos usando Promise.race com a array 'promises2':

// // Promise.race(promises2) aguarda até que a primeira promessa em 'promises2' seja resolvida ou rejeitada.
// Promise.race(promises2)
//     .then(function(valor){
//         console.log(valor); // Quando a primeira promessa é resolvida, seu valor é impresso no console.
//     })
//     .catch(function(erro){
//         console.log(erro);  // Se a primeira promessa for rejeitada, o erro é capturado e impresso no console.
//     });





// // Promise.resolve é usado para retornar imediatamente uma promessa resolvida com um determinado valor.

// // A função baixaPagina simula o processo de baixar uma página, e retorna uma promessa:
// function baixaPagina(){
//     const emCache = true; // Simula se a página está em cache ou não.

//     if(emCache){
//         // Se a página estiver em cache, retorna uma promessa resolvida com o valor 'Página em cache'.
//         return Promise.resolve('Página em cache');
//     } else {
//         // Se a página não estiver em cache, chama a função esperaAi para simular o tempo de espera para baixar a página.
//         return esperaAi('Baixei a pagina',3000);
//     }
// }
// // Chama a função baixaPagina() para baixar a página.
// baixaPagina()
//     .then(dadosPagina => {
//         // Se a promessa for resolvida com sucesso, os dados da página são impressos no console.
//         console.log(dadosPagina);
//     })
//     .catch(e => {
//         // Se a promessa for rejeitada (ou seja, ocorrer algum erro), uma mensagem de erro é impressa no console.
//         console.log('erro', e);
//     });







// // Promise.reject é usado para retornar imediatamente uma promessa rejeitada com um determinado motivo (mensagem de erro).

// // A função baixaPagina2 simula o processo de baixar uma página, e retorna uma promessa:
// function baixaPagina2(){
//     const emCache = true; // Simula se a página está em cache ou não.

//     if(emCache){
//         // Se a página estiver em cache, retorna uma promessa rejeitada com a mensagem 'Página em cache'.
//         return Promise.reject('Página em cache');
//     } else {
//         // Se a página não estiver em cache, chama a função esperaAi para simular o tempo de espera para baixar a página.
//         return esperaAi('Baixei a pagina',3000);
//     }
// }

// // Chamamos a função baixaPagina2() para baixar a página.
// baixaPagina2()
//     .then(dadosPagina => {
//         // Se a promessa for resolvida com sucesso, os dados da página são impressos no console.
//         console.log(dadosPagina);
//     })
//     .catch(e => {
//         // Se a promessa for rejeitada (ou seja, ocorrer algum erro), uma mensagem de erro é impressa no console.
//         console.log('ERROR', e);
//     });
