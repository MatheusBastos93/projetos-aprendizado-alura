//Variáveis Raquete
let larguraRaquete = 14;
let alturaRaquete = 75;

//Variáveis Raquete 1
let posRaquete1X = 6;
let posRaquete1Y = 175;
let velocidadeRaquete1 = 8;

//Variáveis Raquete 2
let posRaquete2X = 594;
let posRaquete2Y = 175;
let velocidadeRaquete2 = 8;
let chanceDeErrar = 54;

function mostraRaquete1(){
  image(raquete1,posRaquete1X,posRaquete1Y,larguraRaquete,alturaRaquete);
}

function mostraRaquete2(){
  image(raquete2,posRaquete2X-larguraRaquete,posRaquete2Y,larguraRaquete,alturaRaquete);
}

function movRaquete1(){
  if (keyIsDown(UP_ARROW)){
    if (podeSeMoverCimaR1()){
      posRaquete1Y -= velocidadeRaquete1;
    }
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMoverBaixoR1()){
      posRaquete1Y += velocidadeRaquete1;
    }
  }
}

function movRaquete2(){
  if (keyIsDown(87)){
    if (podeSeMoverCimaR2()){
      posRaquete2Y -= velocidadeRaquete2;
    }
  }
  if (keyIsDown(83)){
    if (podeSeMoverBaixoR2()){
      posRaquete2Y += velocidadeRaquete2;
    }
  }
}

function movRaqueteComp(){
  // erro começa em 53
  velocidadeRaquete2 = yEsfera - posRaquete2Y - alturaRaquete / 2 + chanceDeErrar;
    //chanceDeErrar;
    
    if (posRaquete2Y + velocidadeRaquete2 > 1 && posRaquete2Y + velocidadeRaquete2 + alturaRaquete < 399){
      posRaquete2Y += velocidadeRaquete2;
    }
}

function podeSeMoverCimaR1(){
  return posRaquete1Y > 1;
}

function podeSeMoverBaixoR1(){
  return posRaquete1Y + alturaRaquete < height;
}

function podeSeMoverCimaR2(){
  return posRaquete2Y > 1;
}

function podeSeMoverBaixoR2(){
  return posRaquete2Y + alturaRaquete < height;
}

function calculaChanceDeErrar() {
  if (pontosP2 >= pontosP1) {
    chanceDeErrar += random (2,5);
    if (chanceDeErrar >= 68){
    chanceDeErrar = 49 + random (1,3);
    }
  } else {
    chanceDeErrar -= random (2,5);
    if (chanceDeErrar <= 42){
    chanceDeErrar = 57 - random (1,4);
    }
  }
}
