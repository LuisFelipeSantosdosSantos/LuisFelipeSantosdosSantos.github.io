//carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 98, 150,210,260,315];
let velocidadesCarros = [5, 2.5, 7,2.7,3,2];
let comprimentoCarros = [50,50,80,50,50,80];
let altura = 40;

function mostraCarro(){
  //print("quantidade de carros: "+imagensCarros.length);
  for(let i=0; i< imagensCarros.length; i++){
  image(imagensCarros[i], xCarros[i], yCarros[i],comprimentoCarros[i],altura);
  }
}

function movimentarCarro(){
  for(let i=0; i< imagensCarros.length; i++){
  xCarros[i] -= velocidadesCarros[i];
   
  if(xCarros[i] < -50){
    xCarros[i] = 600;//volta ao inicial
    }
  }
}
function mostrarEstrada(){
  background(imagemDaEstrada);
}