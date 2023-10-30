alert('Boas vindas ao jogo do número secreto');
nomeuser = prompt('qual o seu nome?')
alert (`bem vindo ${nomeuser} e boa sorte!`)
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;



// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`${nomeuser}, O número secreto é menor que ${chute}`);
        } else {
            alert(`${nomeuser}, O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

if (tentativas > 1) {
     alert(`Isso ai! ${nomeuser}, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
 }
