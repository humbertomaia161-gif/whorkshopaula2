alert("Ola mundo");

const numeroAleatorio = 69 
let chute = prompt("Mini game número secreto!!!")
let tentativas = 1;
console.log(numeroAleatorio);

while (chute != numeroAleatorio) {
    if (chute === numeroAleatorio) {
        break;
        
    }
    if(chute > numeroAleatorio) {
        chute = prompt("O número que você digitou é maior que o número aleatorio,tente novamente")
        tentativas++;
    } else {
        chute = prompt("O número que você digitou é menor que o número aleatorio,tente novamente")
        tentativas++;
    }
}