let computerChoice = ["rock", "paper", "scissors"];//define escolha aleatoria do computador
let pcPoints = 0; //criada para acumular pontos do computador
let playerPoints = 0; //criada para acumular pontos do jogador

//caixa para solicitar escolha do jogador
let playerChoice = prompt("chose your option: ");

//repeticao para que o jogo ocorra 5 vezes
for (let i = 0; i < 5; i++){
    //mostra a esolha do jogador em todas as rodadas
    console.log(playerChoice)

    //funcao para definir aleatoriamente a escolha do computador
    function getComputerChoice(){
        let option = Math.floor(Math.random()*computerChoice.length);
        return computerChoice[option];
    }
    let computer = getComputerChoice();
    console.log(computer)

    //situacoes que definem o resultado da partida
    if(computer === playerChoice){
        console.log("It's a tie")
    } else if (
        (computer === "paper" && playerChoice === "rock") ||
        (computer === "scissors" && playerChoice === "paper") ||
        (computer === "rock" && playerChoice === "scissors")){
        console.log("computer point");
        pcPoints += 1;
    } else{
        console.log("player point");
        playerPoints += 1;
    }
}

//placar
console.log("Computer: " + pcPoints + " Player: " + playerPoints);

//resultados finais
if(pcPoints === playerPoints){
    console.log("nobody wins, sorry")
} else if (pcPoints > playerPoints){
    console.log("Computer wins!!")
} else {
    console.log("Player wins!!")
}