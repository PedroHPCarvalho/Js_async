function numAleat (min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg,tempo,cb){
  setTimeout(() => {
    console.log(msg);
    if(cb) cb();
  },tempo)
}

esperaAi('FRASE 1', numAleat(1,3),function(){
  esperaAi('FRASE 2', numAleat(1,3),function(){
    esperaAi('FRASE 3', numAleat(1,3));
  });
});
