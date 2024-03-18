const nome1 = prompt("Digite seu nome");
const sobrenome1 = prompt("Digite seu sobrenome");
const idade1 = parseInt(prompt("Digite a sua idade"));
const cpf1 = prompt("Digite o seu cpf");
var valorDaConta1 = parseFloat(prompt("Digite o valor da sua conta"));

const nome2 = prompt("Digite seu nome");
const sobrenome2 = prompt("Digite seu sobrenome");
const idade2 = parseInt(prompt("Digite a sua idade"));
const cpf2 = prompt("Digite o seu cpf");
var valorDaConta2 = parseFloat(prompt("Digite o valor da sua conta"));

const nome3 = prompt("Digite seu nome");
const sobrenome3 = prompt("Digite seu sobrenome");
const idade3 = parseInt(prompt("Digite a sua idade"));
const cpf3 = prompt("Digite o seu cpf");
var valorDaConta3 = parseFloat(prompt("Digite o valor da sua conta"));

const nome4 = prompt("Digite seu nome");
const sobrenome4 = prompt("Digite seu sobrenome");
const idade4 = parseInt(prompt("Digite a sua idade"));
const cpf4 = prompt("Digite o seu cpf");
var valorDaConta4 = parseFloat(prompt("Digite o valor da sua conta"));

const nome5 = prompt("Digite seu nome");
const sobrenome5 = prompt("Digite o seu sobrenome");
const idade5 = parseInt(prompt("Digite a sua idade"));
const cpf5 = prompt("Digite o seu cpf");
var valorDaConta5 = parseFloat(prompt("Digite o valor da sua conta"));

var usuarios = [
    [nome1, nome2, nome3, nome4, nome5],
    [sobrenome1, sobrenome2, sobrenome3, sobrenome4, sobrenome5],
    [idade1, idade2, idade3, idade4, idade5],
    [cpf1, cpf2, cpf3, cpf4, cpf5],
    [valorDaConta1, valorDaConta2, valorDaConta3, valorDaConta4, valorDaConta5]
]

var somaDosValores = valorDaConta1 + valorDaConta2 + valorDaConta3 + valorDaConta4 + valorDaConta5;
var divisaoDosValores = somaDosValores / 5;

console.log(`Olá ${usuarios[0][0]} ${usuarios[1][0]}! Você tem ${usuarios[2][0]} anos seu cpf é ${usuarios[3][0]} seu saldo no banco é ${usuarios[4][0]}`);
console.log(`Olá ${usuarios[0][1]} ${usuarios[1][1]}! Você tem ${usuarios[2][1]} anos seu cpf é ${usuarios[3][1]} seu saldo no banco é ${usuarios[4][1]}`);
console.log(`Olá ${usuarios[0][2]} ${usuarios[1][2]}! Você tem ${usuarios[2][2]} anos seu cpf é ${usuarios[3][2]} seu saldo no banco é ${usuarios[4][2]}`);
console.log(`Olá ${usuarios[0][3]} ${usuarios[1][3]}! Você tem ${usuarios[2][3]} anos seu cpf é ${usuarios[3][3]} seu saldo no banco é ${usuarios[4][3]}`);
console.log(`Olá ${usuarios[0][4]} ${usuarios[1][4]}! Você tem ${usuarios[2][4]} anos seu cpf é ${usuarios[3][4]} seu saldo no banco é ${usuarios[4][4]}`);

console.log(`A soma dos valores é ${somaDosValores}`);
console.log(`A média desses valores é igual a ${divisaoDosValores}`);