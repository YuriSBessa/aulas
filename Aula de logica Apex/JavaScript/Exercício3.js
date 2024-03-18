const nome1 = prompt("Digite seu nome");
const sobrenome1 = prompt("Digite o sobrenome");
const cidade1 = prompt("Digite a cidade");
const cpf1 = prompt("Digite o cpf");
const nomeDaAgencia1 = prompt("Digite o nome da agencia");
var salario1 = parseFloat(prompt("Digite o salario"));

const nome2 = prompt("Digite seu nome");
const sobrenome2 = prompt("Digite o sobrenome");
const cidade2 = prompt("Digite a cidade");
const cpf2 = prompt("Digite o cpf");
const nomeDaAgencia2 = prompt("Digite o nome da agencia");
var salario2 = parseFloat(prompt("Digite o salario"));

const nome3 = prompt("Digite seu nome");
const sobrenome3 = prompt("Digite o sobrenome");
const cidade3 = prompt("Digite a cidade");
const cpf3 = prompt("Digite o cpf");
const nomeDaAgecia3 = prompt("Digite o nome da agencia");
var salario3 = parseFloat(prompt("Digite o salario"));

const nome4 = prompt("Digite seu nome");
const sobrenome4 = prompt("Digite o sobrenome");
const cidade4 = prompt("Digite a cidade");
const cpf4 = prompt("Digite o cpf");
const nomeDaAgencia4 = prompt("Digite o nome da agencia");
var salario4 = parseFloat(prompt("Digite o salario"));

const nome5 = prompt("Digite seu nome");
const sobrenome5 = prompt("Digite o sobrenome");
const cidade5 = prompt("Digite a cidade");
const cpf5 = prompt("Digite o cpf");
const nomeDaAgencia5 = prompt("Digite o nome da agencia");
var salario5 = parseFloat(prompt("Digite o salario"));

const nome6 = prompt("Digite seu nome");
const sobrenome6 = prompt("Digite o sobrenome");
const cidade6 = prompt("Digite a cidade");
const cpf6 = prompt("Digite o cpf");
const nomeDaAgencia6 = prompt("Digite o nome da agencia")
var salario6 = parseFloat(prompt("Digite o salario"));

var soma = salario1 + salario2 + salario3 + salario4 + salario5 + salario6;
var divisaoDosValores = soma / 5;

if (divisaoDosValores >= 1000000.00){
    console.log("A pessoa é milhonaria");
} else if(divisaoDosValores >= 100000.00){
    console.log("A pessoa é rica");
} else if(divisaoDosValores >= 50000.00){
    console.log("A pessoa é bem de vida");
} else if (divisaoDosValores >= 5000.00){
    console.log("A pessoa é classe media");
} else{
    console.log("A pessoa é pobre");
}

var usuarios = [
    {
        nome: nome1,
        sobrenome: sobrenome1,
        cidade: cidade1,
        cpf: cpf1,
        nomeDaAgencia: nomeDaAgencia1,
        salario: salario1
    },
    {
        nome: nome2,
        sobrenome: sobrenome2,
        cidade: cidade2,
        cpf: cpf2,
        nomeDaAgencia: nomeDaAgencia2,
        salario: salario2
    },
    {
        nome: nome3,
        sobrenome: sobrenome3,
        cidade: cidade3,
        cpf: cpf3,
        nomeDaAgencia: nomeDaAgecia3,
        salario: salario3
    },
    {
        nome: nome4,
        sobrenome: sobrenome4,
        cidade: cidade4,
        cpf: cpf4,
        nomeDaAgencia: nomeDaAgencia4,
        salario: salario4
    },
    {
        nome: nome5,
        sobrenome: sobrenome5,
        cidade: cidade5,
        cpf: cpf5,
        nomeDaAgencia: nomeDaAgencia5,
        salario: salario5
    },
    {
        nome: nome6,
        sobrenome: sobrenome6,
        cidade: cidade6,
        cpf: cpf6,
        nomeDaAgencia: nomeDaAgencia6,
        salario: salario6
    }
];

console.log(`Seu nome é ${usuarios[0].nome} ${usuarios[0].sobrenome} sua cidade é ${usuarios[0].cidade} seu cpf é ${usuarios[0].cpf} sua conta é ${usuarios[0].nomeDaAgencia} e o seu salario é ${usuarios[0].salario}`);
console.log(`Seu nome é ${usuarios[1].nome} ${usuarios[1].sobrenome} sua cidade é ${usuarios[1].cidade} seu cpf é ${usuarios[1].cpf} sua conta é ${usuarios[1].nomeDaAgencia} e o seu salario é ${usuarios[1].salario}`);
console.log(`Seu nome é ${usuarios[2].nome} ${usuarios[2].sobrenome} sua cidade é ${usuarios[2].cidade} seu cpf é ${usuarios[2].cpf} sua conta é ${usuarios[2].nomeDaAgencia} e o seu salario é ${usuarios[2].salario}`);
console.log(`Seu nome é ${usuarios[3].nome} ${usuarios[3].sobrenome} sua cidade é ${usuarios[3].cidade} seu cpf é ${usuarios[3].cpf} sua conta é ${usuarios[3].nomeDaAgencia} e o seu salario é ${usuarios[3].salario}`);
console.log(`Seu nome é ${usuarios[4].nome} ${usuarios[4].sobrenome} sua cidade é ${usuarios[4].cidade} seu cpf é ${usuarios[4].cpf} sua conta é ${usuarios[4].nomeDaAgencia} e o seu salario é ${usuarios[4].salario}`);
console.log(`Seu nome é ${usuarios[5].nome} ${usuarios[5].sobrenome} sua cidade é ${usuarios[5].cidade} seu cpf é ${usuarios[5].cpf} sua conta é ${usuarios[5].nomeDaAgencia} e o seu salario é ${usuarios[5].salario}`);