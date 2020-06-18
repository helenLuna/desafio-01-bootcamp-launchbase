// Cálculo do IMC
const nome = 'Helen';
const peso = 100;
const altura = 1.80;
const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`);
} else if (imc <= 29.9) {
    console.log(`${nome} você não está acima do peso`);
}




