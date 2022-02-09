const prompt = require("prompt-sync")()
console.clear()

console.log()
console.log(`Bem vindo projeto:`)
console.log()

let hora = 6
let minuto = 0

let pontuacao = 375


function topJogador(pontuacao){
    let jogador = "Basico"
    if(pontuacao >= 800){
        jogador = nome + "" + "Profissional"
    }else if(pontuacao >= 600 && pontuacao < 800){
        jogador = nome + "" + "Avancado"
    }else if(pontuacao >= 400 && pontuacao < 600){
        jogador = nome + "" + "bom"
    }else jogador = nome + "" + "amador"
}

function tempo (tempo){
//    console.log(`Agora são ${hora}:${minuto}`)
    minuto += tempo
    if(minuto >= 60){
        minuto = minuto - 60
        hora++
    }
    // console.log(`Agora são ${hora}:${minuto}`)
    return hora, minuto
}




console.log(`Pandemia???    2022???    Crise Mundial????....    Que isso cara
estamos em 2012 e você tem 14 anos, agora volte para a lan house e sente-se seu
 time de cs 1.6 lhe aguarda!...`)
console.log()

let nome = "paulo"

console.log(`${nome}, Sua mãe lhe acorda mais um dia normalmente, São ${hora}:${minuto} da manhã, sua aula começa as 07:100, ela manda você ir para escola, Você possui 3 opções:`)
console.log()

console.log(`Opção 1 = Você toma café e sai de casa
opção 2 = Você vira para outro lado e continua a dormir
opção 3 = Você tenta fingir que esta doente`)
console.log()

let escolha01 = prompt("Qual sua escolha: ")
console.log()

if(escolha01 == 1){
    tempo(20)
    console.log(`Ja são ${hora}:${minuto}, Você esta fora de sua casa, porem no caminho a escola você passa em frente a Lan House que joga quase todo dia
    e seus amigos estâo la, Seu sonho sempre foi ser o melhor jogador de cs 1.6, porem você esta nas semanas de provas da escola: `)
    console.log()

}