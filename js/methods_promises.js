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

//Promise.all
// const promises = [
//     'Primeiro Valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     //esperaAi(1000, 1000), //REJECT
//     'Outro Valor'
// ];

// const promises2 = [
//     esperaAi('Promise 1', rand(1,3)),
//     esperaAi('Promise 2', rand(1,3)),
//     esperaAi('Promise 3', rand(1,3)),
//     esperaAi(1000,rand(1,3))
//     //esperaAi(1000, 1000), //REJECT
// ];

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });

// //Promise.race
// Promise.race(promises2)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });


//Promise.resolve

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a pagina',3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('erro', e))

//Promise.reject

function baixaPagina2(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache')
    } else {
        return esperaAi('Baixei a pagina',3000)
    }
}

baixaPagina2()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERROR', e))
