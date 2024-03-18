const idade = parseInt(prompt("Digite a sua idade"));

if(idade <= 10 && idade >= 0){
    console.log("Você é criança");
} else if(idade <= 17){
    console.log("Você é adolecente");
} else if(idade == 18){
    console.log("Você tem 18 anos");
} else if(idade <= 50){
    console.log("Você é adulto");
} else if(idade <= 100){
    console.log("Você é idoso");
} else{
    console.log("Idade invalida");
}

/*
const idade = prompt("idade");
if (idade >= 0, idade < 12){
    console.log("Você é uma criança.");
} else if (idade >= 12, idade < 18){
    console.log("Você é um adolecente");
} else if (idade == 18){
    console.log("Você tem 18 anos");
} else if (idade > 18, idade < 60){
    console.log("Você é um adulto");
} else if (idade >= 60){
    console.log("Você é um idoso");
} else {
    console.log("Idade invalida");
}
 */