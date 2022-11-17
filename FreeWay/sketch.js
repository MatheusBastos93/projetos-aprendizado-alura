function setup() {
  createCanvas(500, 400);
  somTrilha.loop(0, 1, 0.03, 1, 97);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  resetPosCarro();
  verColisao();
  incluiPontos();
  marcaPonto();
}

