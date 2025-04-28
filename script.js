idade = prompt("Informe a sua idade: ");
if (idade < 18) {
    alert("Você não tem permissão para jogar");
} else {
    alert("Vamos jogar!")
}

if (idade >= 18) {
    escolhaplayer = prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura");
    if (escolhaplayer == 1) {
        alert("Você escolheu Pedra");
    }
    if (escolhaplayer == 2) {
        alert("Você escolheu Papel");
    }
    if (escolhaplayer == 3) {
        alert("Você escolheu Tesoura");
    }
    escolhaCPU = Math.floor(Math.random() * 3) + 1;

    if (escolhaplayer == escolhaCPU) {
        alert("Empate!");
    }

    if (escolhaplayer == 1 && escolhaCPU == 3) {
        alert("Você ganhou! Computador escolheu " + escolhaCPU + "-Tesoura");
    }
    if (escolhaplayer == 2 && escolhaCPU == 1) {
        alert("Você ganhou! Computador escolheu " + escolhaCPU + "-Pedra");
    }
    if (escolhaplayer == 3 && escolhaCPU == 2) {
        alert("Você ganhou! Computador escolheu " + escolhaCPU + "-Papel");
    }

    if (escolhaplayer == 3 && escolhaCPU == 1) {
        alert("Computador ganhou! Escolheu " + escolhaCPU + "-Pedra");
    }
    if (escolhaplayer == 1 && escolhaCPU == 2) {
        alert("Computador ganhou! Escolheu " + escolhaCPU + "-Papel");
    }
    if (escolhaplayer == 2 && escolhaCPU == 3) {
        alert("Computador ganhou! Escolheu " + escolhaCPU + "-Tesoura");
    }
}
