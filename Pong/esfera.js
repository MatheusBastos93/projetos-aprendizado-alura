let nivelDificuldade = 0;
let quantRicochetes = 0;
let nivelEsfera = 0;
let yEsfera = 200;
let xEsfera = 300;
let velocidadeXEsfera = 6;
let velocidadeYEsfera = 3;
let bordaXDireitaEsfera = 20;
let bordaYInferiorEsfera = 20;
let colisao = false;
let meusPontos = 0;

function mostraEsfera(){
  if (nivelEsfera == 0){
    image(ball,xEsfera,yEsfera,20,20);
  }
  if (nivelEsfera == 1){
    image(ball2,xEsfera,yEsfera,20,20);
  }
  if (nivelEsfera == 2){
    image(ball3,xEsfera,yEsfera,20,20);
  }
}

function movimentoEsfera(){
  xEsfera += velocidadeXEsfera;
  yEsfera += velocidadeYEsfera;
}

function ricochete(){
  if (xEsfera + bordaXDireitaEsfera > width || xEsfera < 1){
    velocidadeXEsfera *= -1;
    somPonto.play(0, 1, 0.1);
    quantRicochetes++;
  }
  
  if (yEsfera + bordaYInferiorEsfera > height || yEsfera < 0){
    velocidadeYEsfera *= -1;
    somColiBorda.play(0, 1, 0.1);
    quantRicochetes++;
  }
}

function verificaColisaoRaquete() {
    if (xEsfera < posRaquete1X + larguraRaquete
        && yEsfera > posRaquete1Y - alturaRaquete/2 + 22
        && yEsfera + bordaYInferiorEsfera < posRaquete1Y + alturaRaquete + 15 && velocidadeXEsfera < 0) {
        velocidadeXEsfera *= -1;
        somRaquetada.play(0, 1, 0.1);
        quantRicochetes++;
        if (gameMode == 2){
          calculaChanceDeErrar();
        }
    }
      if (xEsfera + bordaXDireitaEsfera +12> posRaquete2X
        && yEsfera > posRaquete2Y - alturaRaquete/2 + 22
        && yEsfera + bordaYInferiorEsfera < posRaquete2Y + alturaRaquete + 15 && velocidadeXEsfera > 0) {
        velocidadeXEsfera *= -1;
        somRaquetada.play(0, 1, 0.1);
        quantRicochetes++;
    }

}

function veriNivel (){
  
  if (nivelDificuldade == 0){
     if(quantRicochetes == 30  || pontosP1 + pontosP2 == 6){
       nivelDificuldade++;
       if(velocidadeXEsfera > 0){
         velocidadeXEsfera++;
       } else {
         velocidadeXEsfera--;
       }
     } 
  }
  
  if (nivelDificuldade == 1){
    if(quantRicochetes == 40  || pontosP1 + pontosP2 == 7){
       nivelDificuldade++;
       if(velocidadeYEsfera > 0){
         velocidadeYEsfera++;
       } else {
         velocidadeYEsfera--;
       }
     } 
  }
  
  if (nivelDificuldade == 2){
    if(quantRicochetes == 60  || pontosP1 + pontosP2 == 15){
       nivelDificuldade++;
       if(velocidadeXEsfera > 0){
         velocidadeXEsfera += 2;
       } else {
         velocidadeXEsfera -= 2;
       }
     } 
  }
  
  if (nivelDificuldade == 3){
    if(quantRicochetes == 75  || pontosP1 + pontosP2 == 17){
       nivelDificuldade++;
       if(velocidadeYEsfera > 0){
         velocidadeYEsfera++;
       } else {
         velocidadeYEsfera--;
       }
       nivelEsfera++;
     } 
  }
  
  if (nivelDificuldade == 4){
    if(quantRicochetes == 100  || pontosP1 + pontosP2 == 25){
       nivelDificuldade++;
       if(velocidadeXEsfera > 0){
         velocidadeXEsfera += 2;
       } else {
         velocidadeXEsfera -= 2;
       }
       if(velocidadeYEsfera > 0){
         velocidadeYEsfera += 2;
       } else {
         velocidadeYEsfera -= 2;
       }
       nivelEsfera++;
     } 
  }  
}
