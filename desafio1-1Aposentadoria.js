const nome = 'Helen';
const sexo = 'Feminino';
const idade = 26;
const contribuicao = 2;
const soma = idade + contribuicao;

if ( (sexo === 'Feminino' && contribuicao >= 30) || (sexo === 'Masculino' && contribuicao >= 35) ) {
    console.log(`${nome}, você pode se aposentar`);
} else if ((sexo === 'Feminino' && soma >= 85) || (sexo === 'Masculino' && soma >= 95) ) {
    console.log(`${nome}, você pode se aposentar`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar`);
}

