function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
if(!(placar >= 10 || placar2 >=10))
    jogo();
      else
    mostraVencedor();
 
}

 function mostraVencedor(){
   
   if(placar >= 10){
    fill(252, 186, 3);
    rect(114, 182, 237)
    textAlign(CENTER);
    fill(0);
    textSize(30);
    text("Lado Esquerdo é Campeão ☜♛",200,200);
          }else{
  if(placar2 >= 10){
    fill(255,255,255);
    rect(252, 91, 91)
    textAlign(CENTER);
    fill(0);
    textSize(30);
    text("Lado direito é Campeão ☞♛",200,200);
    
    }
  }
}

function jogo() {
  mostrarEstrada();
  movimentarAtor();
  mostrarAtor();
  mostrarAtor2();
  mostraCarro();
  movimentarCarro();
  movimentarAtor2();
  verificaColisao();
  verificarColisao2();
  mostrarPlacar();
  mostrarPlacar2()
  
}//
