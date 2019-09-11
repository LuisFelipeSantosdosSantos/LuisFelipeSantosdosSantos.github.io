//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;
let corBolinha = [155, 214, 6];
let velocidadeX = 10;
let velocidadeY = 10;

//variaveis raquete
let alturaRaquete = 100;
let larguraRaquete =20;

//variaveis minha raquete
let xMinhaRaquete = 590;
let yMinhaRaquete = 150;
let corMinhaRaquete = [3, 219, 252];

let xRaqueteOponente =-10;
let yRaqueteOponente =150;
let corRaqueteOponente = [245,249,0];
let pontosMeus = 0;
let pontosOponente = 0;
let ponto;
let raquetada;


function preLoad(){
  raquetada = loadSound('raquetada-1.mp3')
  ponto = loadSound('ponto-1.mp3')
}
//Configuração Inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("largura: "+largura+" Altura: "+altura);
 
}
//Desenha - Looping infinito while(1)
function draw() {
  background(0);
  
  if(!(pontosMeus >= 10 || pontosOponente >= 10))
  
    jogo();
  else
    mostraVencedor();
}//draw

function mostraVencedor(){
if(pontosMeus >=10){
  fill(255,255,255)
  rect(300,0,300,400);
  textAlign(CENTER);
  fill(252, 186, 3);
  textSize(30);
  text("Lado direito é Campeão ☞♛",300,200);
   }else{
  fill(255,255,255)
  rect(300,0,300,400);
  textAlign(CENTER);
  fill(252, 186, 3);
  textSize(30);
  text("Lado Esquerdo é Campeão ☜♛",300,200);
    }
  }

function jogo(){ 
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  marcaPonto();
  mostraPlacar();
}



function mostraPlacar(){
  fill(111, 112, 111);
  textSize(30);
   strokeWeight(4);//Largura da borda
   stroke(111, 112, 111);
   
   fill(245, 2, 11);
   rect(428,12,60,35,10);
   rect(128,12,60,35,10);


  
  textSize(32);
  fill(240,249,0);
  text(pontosOponente,150,40);
  
  fill(111, 112, 111);
  textSize(32);
  fill(3, 219, 252);
  text(pontosMeus,450,40);
  
}//marca ponto

function marcaPonto()
  { if (xBolinha <11){
  pontosMeus += 1; //pontosMeus = pontosMeus +1
  }
  
  
  if(xBolinha >589){
    pontosOponente += 1;
  }
   
}

function verificaColisaoRaquete(){
 if(xBolinha + raio > xMinhaRaquete&&
    yBolinha -raio < yMinhaRaquete + alturaRaquete&&
    yBolinha +raio > yMinhaRaquete){
   
   if(!(xBolinha < 300 && velocidadeX > 0 ||
       xBolinha > 300 && velocidadeX <0)){
    velocidadeX *= -1;
   }
 }

   if(xBolinha - raio < xRaqueteOponente+larguraRaquete &&
      yBolinha - raio < yRaqueteOponente + alturaRaquete &&
      yBolinha + raio > yRaqueteOponente){
     
     if(!(xBolinha < 300 && velocidadeX > 0 ||
       xBolinha > 300 && velocidadeX <0)){
            velocidadeX *= -1;
   }
  }  
}

function movimentaMinhaRaquete(){
if(keyIsDown(UP_ARROW)){
if(yMinhaRaquete < 0){
  yMinhaRaquete = 0;
}else{
  yMinhaRaquete -= 10;
  }
}
if(keyIsDown(DOWN_ARROW)){
  if(yMinhaRaquete > 300){
      yMinhaRaquete = 300;
  }else{
    yMinhaRaquete += 10;
    }
  }
}
function movimentaRaqueteOponente(){
if(keyIsDown(87)){
  if(yRaqueteOponente < 0){
  yRaqueteOponente = 0;
}else{
  yRaqueteOponente -= 10;
  }
}
if(keyIsDown(83)){
   if(yRaqueteOponente > 300){
      yRaqueteOponente = 300;
  }else{
    yRaqueteOponente += 10;
    }
  }
}

function mostraRaquete(){
 fill(corMinhaRaquete);
  rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
  fill(corRaqueteOponente);
  rect(xRaqueteOponente,yRaqueteOponente,
       larguraRaquete,alturaRaquete);
}

function movimentaBolinha(){
    if(frameCount > 100){
    xBolinha += velocidadeX; // Incremento de x
    yBolinha += velocidadeY; // Incremento de y  
    }
  }//bolinha mexer

function verificaColisao() {

if (xBolinha + raio > largura || xBolinha - raio < 0) {
velocidadeX *= -1;}

if (yBolinha + raio > altura || yBolinha - raio < 0) {
velocidadeY *= -1;}
}
function mostraBolinha(){
  noStroke();
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
  }
