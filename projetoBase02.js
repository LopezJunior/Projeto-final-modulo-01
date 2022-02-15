const prompt = require("prompt-sync")()
console.clear()

let pontos = 0
let hora = 6
let minuto = 0
let dia= 0

let equipes = ["Furia", "Mibr", "GodSent", "FireSerpent", "Navi", "Titans", "RingMaster"]
let aleatorio = Math.floor(Math.random() * 7);
let equipe = equipes[aleatorio]

function tempo (minutos, horas, dias){
    minuto += minutos
    hora += horas
    dia += dias
    if(minuto >= 60){
        minuto = minuto - 60
        hora++
    }else if (hora >= 24){
        hora = hora - 24
        dia++
    }return hora, minuto, dia
}

console.log(`Pandemia???    2022???    Crise Mundial????....    Que isso cara
estamos em 2012 e você tem 14 anos, agora volte para a lan house e sente-se seu
time de cs 1.6 lhe aguarda!...`)
console.log()

console.log(`Voce esta começando no dia: ${dia}, as ${hora} horas e ${minuto} minutos !!`)
console.log()


let nome = prompt("Qual seu nome? ")
console.log()

console.log(`${nome}, Sua mãe lhe acorda mais um dia normalmente, São ${hora}:${minuto} da manhã, sua aula começa as 07:00, ela manda você ir para escola, Você possui 3 opções:`)
console.log()

console.log(`Opção 1 = Você toma café e sai de casa
opção 2 = Você vira para outro lado e continua a dormir
opção 3 = Você tenta fingir que esta doente`)
console.log()

let escolha01 = +prompt("Qual sua escolha: ")
console.log()

if(escolha01 == 1){
    tempo(20, 0, 0)
    console.log(`Ja são ${hora}:${minuto}, Você esta fora de sua casa, porem no caminho a escola você passa em frente a Lan House que joga quase todo dia
    e seus amigos estâo la, Seu sonho sempre foi ser o melhor jogador de cs 1.6, porem você esta nas semanas de provas da escola: `)
    console.log()

    console.log(`Opção 1 = Você fica na Lan house
    Opção 2 = Você vai para aula`)
    let escolha02 = +prompt("Qual sua escolha? ")

    if(escolha02 == 1){
        console.log(`No meio de sua jogatina seus amigos comentam de um site que esta surgindo o GamersClub (gc), onde existe campeonatos
    e um rank de melhores jogadores, como sempre foi seu sonho, agora você vai lutar para se tornar o TOP 1`)
     }else {
         console.log(`No meio de sua aula seus amigos comentam de um site que esta surgindo o GamersClub (gc), onde existe campeonatos
    e um rank de melhores jogadores, como sempre foi seu sonho, agora você vai lutar para se tornar o TOP 1`)
    }
}else if (escolha01 == 2){
    tempo(20, 0, 0)
    console.log(`Sua mae lhe acorda, e ja são ${hora}:${minuto}, e lhe manda ir correndo para aula para não se atrasar, então
    você pega um atalho e consegue chegar a tempo! `)
    console.log()

    console.log(`No meio de sua aula seus amigos comentam de um site que esta surgindo o GamersClub (gc), onde existe campeonatos
         e um rank de melhores jogadores, como sempre foi seu sonho, agora você vai lutar para se tornar o TOP 1`)
}else if(escolha01 == 3){
    tempo(0, 6, 1)
    console.log(`Sua mãe acreditou então você acaba de acordar as  ${hora}:${minuto}, e enquanto você almoça passa no jornal:`)
    console.log()

    console.log(`sobre um site que esta surgindo o GamersClub (gc), onde existe campeonatos
    e um rank de melhores jogadores, como sempre foi seu sonho, agora você vai lutar para se tornar o TOP 1`)
}

console.log()
// console.clear()

console.log(`Você irá participar de jogos com seu time, se conseguir ganhar 5 jogos você tera uma vaga para o campeonato dos CAMPEOES`)
console.log()
console.log(`Sua mãe lhe permitiu a jogar todas as tardes, então logo depois do almoço você irá jogar...`)

// console.log(`Você atualmente possui ${pontos} pontos`)
// console.log()

// console.log(`Sua mãe lhe permitiu a todas as tardes ir jogar com seu time...
// Para este ano estavao programados 5 campeonatos, onde qualquer um pode inscrever sua equipe
// Você e seus amigos então descidem formar um time!!
// Porem por nao possuirem a assinatura premiu, o nome sera de escolha aleatoria da Gamers Club!!`)
// console.log()

// console.log(`Possiveis nomes ainda disponiveis: ${equipes}`)
// console.log()

// console.log(`O sorteio foi feito e, o nome de sua equipe foi ${equipe}`)

let partidasGanha = 0
    
 
while (partidasGanha < 5){
    console.log()
    console.log()
    console.log()

    let provabilidade = Math.floor(Math.random() * 10)

    hora = 13
    console.log(`É um dia novo, são ${hora}:${minuto}, do dia ${dia}`)
    console.log(`Você acabou de almoçar...`)
    console.log()

    console.log(`${nome}, agora são ${hora}:${minuto}, E você tem 3 opções: 
Opção 1 = Ir Treinar
Opção 2 = Ir jogar 1 partida
Opção 3 = Ficar em casa`)
console.log()
    let respostaPartida1 = +prompt("Qual sua escolha? ")
    console.log()

    if (respostaPartida1 == 1){
        tempo(0, 1, 1)
        console.log(`Você treinou e levou 1h para isso e agpra são ${hora}:${minuto}`)
        console.log()

        console.log(`Logo apos isso, ainda havia tempo então você foi jogar sua primeira partida que levou 2h...`)
        console.log()
        if (provabilidade <= 5){
            tempo(0, 4, 1)
            partidasGanha = partidasGanha + 1
            console.log(`Você acabou ganhando sua partida, contendo um total de ${partidasGanha} partidas ganhas!`)
            console.log()
            console.log(`ja são ${hora}:${minuto}, foi uma longa tarde, então você irá dormir, ancioso pelo dia de amanha!`)

        }else {
            tempo(0, 4, 1)
            console.log(`Vocês jogaram muito bem, porem perderam, continuando com um total de ${partidasGanha} partidas ganhas!
        ja são ${hora}:${minuto}, Foi uma longa tarde, então você irá dormir, ancioso pelo dia de amanha`)
        } 
    }else if (respostaPartida1 == 2){
        if (provabilidade <= 5){
            tempo(0, 4, 1)
            partidasGanha = partidasGanha + 1
            console.log(`Você acabou ganhando sua partida, contendo um total de ${partidasGanha} partidas ganhas!`)
            console.log()
            console.log(`ja são ${hora}:${minuto}, Foi uma longa tarde, então você irá dormir, ancioso pelo dia de amanha!`)
            
        }else {
            tempo(0, 4, 1)
            console.log(`Vocês jogaram muito bem, porem perderam, continuando com um total de ${partidasGanha} partidas ganhas!
            ja são ${hora}:${minuto}, Foi uma longa tarde, então você ira dormir, ancioso pelo dia de amanha`)
            
        }
    }else if(respostaPartida1 == 3){
        tempo(0, 7, 1)
        console.log(`Você ficou em casa e dormiu, agora são ${hora}:${minuto}, ja é tarde, agora você ira apenas aguardar ancioso pelo dia de amanha`)
        
    }

}
console.log()
console.log(`Você demorou um total de ${dia} dias para concluir !`)
    
 
