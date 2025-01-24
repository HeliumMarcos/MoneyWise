// tenho R$ 10
let meuDinheiro = 10;

// Coxinha R$ 5
const coxinha = 5;

// Pastel R$ 7
const pastel = 7;

// Posso comprar a  coxinha e o pastel?
meuDinheiro = meuDinheiro - coxinha;

if (meuDinheiro >= pastel) {
  document.write("Posso comprar ambos! :)");
} else {
  document.write("Não posso comprar ambos! :(");
}
