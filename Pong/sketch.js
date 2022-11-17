
function setup() {
  createCanvas(600, 400);
  trilha.loop(0, 1, 0.03, 1, 97);
}

function draw() {
  if (!gameOn && !gameOver){
    novoJogo();
   }
  
  if (gameOn && !gameOver){
    background(bg);
    mostraEsfera();
    movimentoEsfera();
    ricochete();
    mostraRaquete1();
    mostraRaquete2();
    movRaquete1();
    
    if(gameMode == 1){
      movRaquete2();
    } else {
      movRaqueteComp();
    }
    
    verificaColisaoRaquete();
    incluiPlacar();
    marcaPonto();
    veriVitoria();
    veriNivel();
  }
  
  if (gameOver){
    winLoose();
  }
  
}

