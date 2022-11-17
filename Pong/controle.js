let gameOn = false;
let gameMode = 0;
let gameOver = false;
let animaBarraNG = 110;
let idaBarra = true;
let voltaBarra = false;
let vitoriaP1 = false;
let vitoriaP2 = false;

//Tela New Game
function novoJogo(){
  background(bg);
  stroke (50);
  textAlign(CENTER);
  
  //Logo
  image(ball,267,140,20,20);
  fill(255,255,255);
  textSize(56);
  text("PONG", 300, 170);
  rect(200, 180, 200, 12 ,20);
  
  //Autor
  textSize(14);
  text("Programado por: MatheusBastos - 2022", 300, 390);
  
  //Instruções
  textSize(16);
  text("Player 1 - Teclas ↑ ↓", 300, 240);
  text("Player 2 - Teclas W S", 300, 260);
  fill(255,255,80);
  text("Faça 15 pontos para vencer", 300, 280);
  
  //Pressione... para jogar
  fill(255,255,255);
  textSize(18);
  text("Pressione 1 para jogar contra outro player", 300, 320);
  rect(animaBarraNG, 325, 350, 3 ,10);
  
  text("Pressione 2 para jogar contra o computador", 300, 350);
  rect(animaBarraNG, 355, 350, 3 ,10);
  
  if (animaBarraNG < 140 && idaBarra){
    animaBarraNG ++;
  }  
  
  if (animaBarraNG == 140){
    idaBarra = false;
    voltaBarra = true;
  }
    
  if (animaBarraNG > 110 && voltaBarra){
    animaBarraNG --;
  }  
  
  if (animaBarraNG == 110){
    idaBarra = true;
    voltaBarra = false;
  }

  if (keyIsDown(49)){ //1
    gameOn = true;
    gameMode = 1;
  }
  
  if (keyIsDown(50)){ //2
    gameOn = true;
    gameMode = 2;
  }
  
}

//Tela de vitória / derrota
function winLoose (){
    
  background(bg);
  stroke (50);
  
  textAlign(CENTER);

  fill(255,255,255);
  textSize(46);
  if (pontosP1 > pontosP2){
    text("PARABENS PLAYER 1", 300, 170);
  } 
  
  if (pontosP2 > pontosP1 && gameMode == 1){
    text("PARABENS PLAYER 2", 300, 170);
  }
  
  if (pontosP2 > pontosP1 && gameMode == 2){
    text("Infelizmente você perdeu...", 300, 170);
  }
  
  textSize(26);
  if (pontosP2 > pontosP1 && gameMode == 2){
  text("Tente mais uma vez!!!", 300, 210);
    } else {
      text("Você venceu o jogo!!!", 300, 210);
    }
      
  textSize(18);
  text("Placar final", 300, 260);
  
  stroke (255,0,255);
  fill(color(0, 0, 0));
  rect(127, 258, 45, 25,20);
  fill(255,0,255);
  textSize(26);
  text(pontosP1, 150, 280)
  fill(color(0, 0, 0));
  rect(427, 258, 45, 25,20);
  fill(255,0,255);
  text(pontosP2, 450, 280);
  
  stroke (50);
  fill(255,255,255);
  textSize(18);
  text("Pressione 1 para jogar novamente contra outro player", 300, 340);
  text("Pressione 2 para jogar contra o computador", 300, 360);
  
    if (keyIsDown(49)){
    gameOn = true;
    gameMode = 1;
    gameOver = false;
    pontosP1 = 0;
    pontosP2 = 0;
    resetarVar();
  }
  
  if (keyIsDown(50)){
    gameOn = true;
    gameMode = 2;
    gameOver = false;
    pontosP1 = 0;
    pontosP2 = 0;
    resetarVar();
  }
}

//Monitor de vitória
function veriVitoria(){
  if (pontosP1 == 15){
    vitoriaP1 = true;
    gameOn = false;
    gameOver = true;
  }
  
  if (pontosP2  == 15){
    vitoriaP2 = true;
    gameOn = false;
    gameOver = true;
  }
}

//Reset Variáveis
function resetarVar(){
  posRaquete1X = 6;
  posRaquete1Y = 175;
  posRaquete2X = 594;
  posRaquete2Y = 175;
  pontosP1 = 0;
  pontosP2 = 0;

  nivelDificuldade = 0;
  quantRicochetes = 0;
  nivelEsfera = 0;
  yEsfera = 200;
  xEsfera = 300;
  velocidadeXEsfera = 5;
  velocidadeYEsfera = 3;
  velocidadeRaquete1 = 8;
  velocidadeRaquete2 = 8;
}


