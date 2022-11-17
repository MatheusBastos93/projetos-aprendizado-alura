// Variáveis do carro
let xCarros = [600,600,600,600,600,600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 2.5, 3, 5, 3.3, 2.3];
let compCarro = 50;
let altCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i], yCarros[i], compCarro, altCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function resetPosCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}