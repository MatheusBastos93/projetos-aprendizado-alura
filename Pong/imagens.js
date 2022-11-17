let bg;
let ball;
let ball2;
let ball3;
let raquete1;
let raquete2;
let somRaquetada;
let somColiBorda;
let somPonto;
let trilha;

function preload(){
  bg = loadImage("imagens/bg.jpg");
  ball = loadImage("imagens/ball.png");
  ball2 = loadImage("imagens/Esferalv1.png");
  ball3 = loadImage("imagens/Esferalv2.png");
  raquete1 = loadImage("imagens/raquete1.png");
  raquete2 = loadImage("imagens/raquete2.png");
  somRaquetada = loadSound("sons/raquetada.mp3");
  somColiBorda = loadSound("sons/coli-borda.mp3");
  somPonto = loadSound("sons/somPonto.mp3");
  trilha = loadSound("sons/TrilhaComp.mp3");
}