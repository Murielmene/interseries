let nome = prompt(("qual o nome do time?"))
let turma = prompt(("qual a turma do time?"))
let cor = prompt(("qual a cor do time?"))
let mascote = prompt("qual o mascote do time?")


console.log(nome, turma, cor, mascote)


alert(`Bem vindo, á ${nome}, time da turma ${turma} do senac!`)


let gritoGuerra= prompt(("fale o seu grito de guerra para seu time!"))
let gritoGuerraMinusculo = gritoGuerra.toLowerCase()
alert(gritoGuerraMinusculo.toLowerCase())


let atletas = ["muriel", "arnold", "renan", "longoni", "victor"]
atletas.push("francisco")
for(let i = 0; i < 6; i++) {
    const jogador = atletas[i]
    alert("os atletas do time são:")
    alert(jogador)

}
alert(atletas)
let escolha1 = Number (prompt("digite por número, qual esporte deseja jogar? \n1 futebol \n2 volei \n3 basquete \n4 xadrez \n5 fifa"))
if(escolha1 === 1 || 5) {
    alert("parabens, você escolheu os esportes com mais prestígio pelas pessoas da escola!")
} else {
    console.log("este esporte não está sendo disputado no momento.")
    }
let time = {
    nome: "Algazarra",
    turma: "!BM",
    cor: "Vermelha",
    mascote: "Águia",
    atletas: ["muriel", "arnold", "renan", "longoni", "victor", "francisco"],
    esporteEscolhido: "futebol",
    esportes: [],
    pontuação: 0
}
let escolha2 = prompt(("escreva dois esportes que deseja inserir:"))
if(escolha2 === "futebol") {
    alert("não podemos inserir este esporte, pois já está dentro da modalidade do interséries.")
} else {
    time.esportes.push(escolha2)
}
function mostrarPerfilTime () {
    alert(time)
}
if(time.atletas > 5) {
    alert("seu time tem um bom elenco para jogar o campeonato.")
}
let novoMascote = prompt(("escreva um novo nome de mascote para seu time:"))
time.mascote = novoMascote
alert(`o novo mascote do time se chama ${novoMascote}`)

function pontuaçaoDoTime () {
    alert(pontuação)
}
alert("primeira atividade da interseries era produzir um mascote e fazer um grito de guerra.")
alert("voce conseguiu fazer tudo muito bem!")
time.pontuação = 25

alert("os jogos começam e são 3 jogos para sua equipe jogar! se ganhar ganha 10 pontos! empatando ganha apenas 5 pontos, e perdendo não perde nem ganha.")
alert("bons jogos!")
let jogo1 = Number(prompt("PRIMEIRO JOGO! você deseja jogar ofensivamente ou defensivamente? \n 1 ofensivo \n 2 defensivo"))
if(jogo1 === 1) {
    alert("parabens voce conseguiu um grande resultado, ganhou 10 pontos!")
    time.pontuação += 10
} else {
    alert("OH NÃÃO! voce acabou levando um gol no ultimo minuto por se defender demais, ganhou apenas 5 pontos")
    time.pontuação += 5
}
let jogo2 = Number(prompt("SEGUNDO JOGOOOO! você deseja alterar o esquema tático para 2 / 2, ou deixar formação triangular? \n 1 2 / 2 \n 2 triangular"))
if(jogo2 === 2) {
    alert("seu adversário ficou surpreso por manter a mesma estratégia, parabéns ganhou o jogo! mais 10 pontos!")
    time.pontuação += 10
} else {
    alert("voce perdeu este jogo pois escolheu a tática esperada pelo adversário, foi um rodo! perderam!")
}
let jogo3 = Number(prompt("TERCEIRO E ÚLTIMO JOGO! agora você deve decidir quem jogará no lugar de muriel que se machucou: \n1 jogar com Francisco \n2 com um a menos"))
if(jogo3 === 1) {
    alert("voces foram eliminados do grupo, porém conseguiram um resultado convincente, Ganharam o jogo! 10 pontos.")
    time.pontuação += 10
} else{
    alert("voce fez a escolha equivocada, perdeu o jogo e foi eliminado.")
}

alert("a seguir voce verá sua pontuação final no campeonato de interseries da escola senac!")
    alert(time.pontuação)
    
    if(time.pontuação >= 50) {
        alert("Parabens pelo desempenho e o esforço, muito bem time! vocês superaram a pontuação mínima.")

    }else{
        alert("péssimo resultado time, voces ficaram abaixo do esperado, não conseguiram atingir nem o mínimo, mais esforço na próxima!")
    }
