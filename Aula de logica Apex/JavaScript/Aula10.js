const nota = parseInt(prompt("Digite a sua nota"));

if(nota >= 90){
    console.log("Aprovado com nota A");
} else if(nota >= 80){
    console.log("Aprovado com nota B");
} else if(nota >= 70){
    console.log("Aprovado com nota C")
} else{
    console.log("Reprovado");
}