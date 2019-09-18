//ator.js
let yAtor   = 366;
let yAtor2  = 366;
let xAtor   = 100;
let xAtor2  = 300;
let placar  = 0;
let placar2 = 0;
let colidiu = false;

//1
function movimentarAtor(){
  if (keyIsDown(UP_ARROW)) {

  if(yAtor2 > 5)
     yAtor2 -= 3;
}
   
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor2 < 366)
       yAtor2 += 3;    
  }
}

//2
function movimentarAtor2(){
  if (keyIsDown(87)) {

  if(yAtor > 5)
     yAtor -= 3;
  }

  if (keyIsDown(83)) {
    if(yAtor < 366)
       yAtor += 3;
  }
}

//1
function mostrarPlacar(){
  if (yAtor < 15){
      placar += 1;
      voltaAtorParaPosicaoInicial();
      somPonto.play();
}
  textAlign(CENTER)
  textSize (25);
  fill(color (255,240,60))
  text(":" + placar, 160,30)
}

//2
function mostrarPlacar2(){
  if (yAtor2 < 15){
      placar2 += 1;
      voltaAtorParaPosicaoInicial2();
      somPonto.play();
}
  textAlign(CENTER)
  textSize (25);
  fill(color (255,255,255))
  text(":" +  placar2, 350,30)
}

//1
function verificaColisao(){
  
  for(let i=0; i < imagensCarros.length; i++){
   
    colidiu = collideRectCircle(xCarros[i],yCarros[i],         comprimentoCarros[i], altura, xAtor, yAtor,15);
        
        if (colidiu){
            console.log("colidiu");
            voltaAtorParaPosicaoInicial();
            somColidiu.play();
          
        if(placar > 0)
           placar -= 1;
    }
  }
}

//2
function verificarColisao2(){
  
  for(let i=0; i < imagensCarros.length; i++){
   
    colidiu = collideRectCircle(xCarros[i],yCarros[i],         comprimentoCarros[i], altura, xAtor2, yAtor2,15);
         
        if (colidiu){
            console.log("colidiu");
            voltaAtorParaPosicaoInicial2();
            somColidiu.play();
          
        if(placar2 > 0)
           placar2 -= 1;
    }
  }
}

//1
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}
        
function mostrarAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
}

//2
function voltaAtorParaPosicaoInicial2(){
  yAtor2 = 366;
}

function mostrarAtor2(){
  image(imagemDoAtor,xAtor2,yAtor2,30,30)
}