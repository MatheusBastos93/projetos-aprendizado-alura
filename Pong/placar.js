let pontosP1 = 0;
let pontosP2 = 0;

function incluiPlacar(){
  stroke (255,0,255);
  textAlign(CENTER);
  fill(color(0, 0, 0));
  rect(127, 8, 45, 25,20);
  fill(255,0,255);
  textSize(26);
  text(pontosP1, 150, 30)
  fill(color(0, 0, 0));
  rect(427, 8, 45, 25,20);
  fill(255,0,255);
  text(pontosP2, 450, 30);
}

function marcaPonto() {
    if (xEsfera + bordaXDireitaEsfera > width) {
        pontosP1 += 1;
    }
    if (xEsfera < 1) {
        pontosP2 += 1;
    }
}