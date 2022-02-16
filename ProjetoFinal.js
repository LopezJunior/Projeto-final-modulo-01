const prompt = require("prompt-sync")()
console.clear()

let pontos = 880
let hora = 6
let minuto = 0
let dia= 0
let equipes = ["Furia", "Mibr", "GodSent", "FireSerpent", "Navi", "Titans", "RingMaster"]
let aleatorio = Math.floor(Math.random() * 7);
let equipe = equipes[aleatorio]
let adversario = "Luminosity"
let jogadoresAdversarios = [ "Fallen", "Fer", "Coldzera", "Fnx" , "Taco"]
let campeao = 0

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

// Acabei tendo alguns problemas e ficando sem pc durate estas semanas, sei que não é desculpas,
// mas foi oque consegui fazer em alguns dias ( Só consegui arrumar meu pc no domingo desta semana )

console.log(`Uma breve explicação do jogo: CS 1.6 é baseado em rodadas nas quais equipes de contraterroristas e terroristas combatem-se até a eliminação completa de um dos times, e tem como objetivo principal plantar e desarmar bombas, onde se você tiver um kit defuse consegue desarmar a bomba na metade do tempo padrão`)
console.log()
console.log()

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

// INICIO DO CLICLO 2



console.log()

console.log(`Então, Você conseguiu...
Você ganhou 5 partidas e, agora vai poder jogar com os CAMPEOES, onde sera 1 partida
durante estes jogos, você teve um destque muito grande, e foi dada uma pontuação de 880 pontos para você...
onde se somar os pontos das outras 4 pessoas do seu time ainda não chegam nos seus 880...`)
console.log()

console.log(`Você atualmente possui ${pontos} pontos`)
console.log()
console.log(`Sua mãe lhe permitiu a todas as tardes ir TREINAR com seu time...
Para este ano estavao programados 1 jogo com os CAMPEOES, onde qualquer um pode inscrever sua equipe
você e seus amigos então descidem aceitar esta partida!!
Porem por nao possuirem a assinatura premium, o nome sera de escolha aleatoria da Gamers Club!!`)
console.log()

console.log(`Possiveis nomes ainda disponiveis: ${equipes}`)
console.log()

console.log(`O sorteio foi feito e, o nome de sua equipe foi ${equipe}`)
console.log()

console.log(`Muito bem... ${equipe} treinou durante 2 meses para a partida, que sera contra a ${adversario}, que conta com 
os jogadores: ${jogadoresAdversarios} para sua line! `)
console.log()

console.log(`O mapa escolhido para a batalha foi a Dust 2`)
console.log()

console.log(`Enfim chega o dia....
A partida começa, você esta "carregando seu time", porem estão muito bem... `)
console.log()

while(campeao < 1){

    console.log(`o Jogo esta:  ${equipe} 15 x 15 ${adversario}, a partida sera descidida nesse round, quem fazer 16 ganha....`)
    console.log()

    console.log(`Você esta jogando de Contra-Terrorista, Seu time esta com dinheiro suficiente para comprar colete e uma arma de sua preferencia...
    Você compra colete e...`)
    console.log(`   Opção 1 = Awp 
    Opção 2 = M4A1-S
    Opção 3 = P90`)
    console.log()

    let escolhaArma = +prompt("Qual sua escolha? ")
    console.log()

    let defuse = prompt("Deseja comprar kit de desarme?  ")

    let armaEscolhida = ""


    if(escolhaArma == 1){
        armaEscolhida = "Awp"
        console.log(`Você escolheu a Awp, um Fuzil Sniper, de uso apenas de longa distancia e com baixa taxa de disparos...
        porem agora tera de escolher se, vai para o Bomb b ou o Bomb a...`)
        console.log()
    }else if(escolhaArma == 2){
        armaEscolhida = "M4A1-S"
        console.log(`Você escolheu a M4A1-S, um Fuzil de assalto, de uso de média distancia, funcionando tambem para longa e perta
        distancia, porem com seu dano reduzido...
        porem agora tera de escolher se, vai para o Bomb b ou o Bomb a...`)
        console.log()
    }else if(escolhaArma == 3){
        armaEscolhida = "P90"
        console.log(`Você escolheu a P90, uma sub metralhadora, com uma alta taxa de disparos, excelente para curta distancia, porem
        deixa a desejar de longa e média distancia...
        porem agora tera de escolher se, vai para o Bomb b ou o Bomb a...`)
        console.log()
    }

    //     ESCOLHE QUAL BOMB IRA IR

    let trBomb = 3
    let execucao = ["Smokes", "Bang", "Granadas Fragmentada", "Coctel Molotovs"]

    console.log(`Agora escolha:
    Opção 1 = ir para o Bomb A
    Opção 2 = Ir para o Bomb B`)
    console.log()

    let escolhaBomb = +prompt(`Qual Bomb deseja ir? `)

    if(escolhaBomb == 1){
        // console.log(`Você escolheu o Bomb A...
        // Agora resta saber se os Terroristas iram para o Bomb A ou Bomb B (Há 50% de chances em cada Bomb)`)
        console.log()
        if(trBomb <= 5){
            // console.log(`Você escolheu o Bomb A..
            // Agora resta saber se os Terroristas iram para o Bomb A ou Bomb B (Há 50% de chances em cada Bomb)`)
            console.log()
            if(trBomb <= 5){
                // console.log(`Voce esta de ${armaEscolhida}, no Bomb A, e acertou o Bomb que eles iriam... `)
                // console.log(`Porem você esta Sózinho protegento esse Bomb`)
                // console.log()
    
                //     VERIFICA SE ARMA ESCOLHIDA É A CERTA

                if(armaEscolhida == "P90"){
                    console.log(`Você esta com uma sub metralhadora e escuta eles vindo, qual sua jogada?...
                    Opção 1 = Você se esconde na entrada do bomb, para tentar pegar eles desprevinido
                    Opção 2 = Você fica no fundo do Bomb trocanto tiro de longe
                    Opção 3 = Você fica no meio do Bomb atraz de caixas para lhe ajudar`)
        
                    let escolhaP90 = +prompt("Qual sua escolha? ")
        
                    if(escolhaP90 == 1){
                        console.log()
                        console.log(`Terrosristas entram no Bomb usando utilitarios como:`)
                        for (let i = 0; i < execucao.length; i++) {
                                console.log(execucao[i])
                        }
        
                        console.log(`Entram os 5 Terroristas no Bomb, eles não olham para tras, cada um correndo para um lugar no Bomb
                        POREM, você esta nas costas dos 5, quando começa a atirar, cosegue matar 4 facilmente, sobrando apenas 1...
                        Você recarrega e enquanto isso o ultimo esta escondido atraz das caixas, você escuta o barulho de ele Plantando a Bomba
                        e então descide Partir para cima....`)
                        console.log()
        
                        console.log(`(As Smokes ainda estão ali, então isso da ao ultimo inimigo tempo para plantar a bomba)`)
        
                        console.log(`Assim então matando o ultimo inimigo e restando apenas Desarmar a Bomba para Ganhar o jogo`)
        
                        //    VERIFICA  KIT DEFUSE

                        if(defuse == "sim"){
                            console.log()
                            console.log(`Você possui um kit defuse, assim então dando tempo de desarmar a bomba antes de ela explodir...`)
                            campeao += 15
                        }else {
                            console.log()
                            console.log(`Você não possui um kit defuse, assim acaba não dando tempo de desarmar a bomba antes de ela explodir...`)
                            console.log()
        
                            console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                            let tentarNovamente = prompt("Deseja tentar novamente? ")
                            if (tentarNovamente == "nao"){
                                campeao += 2
                            }
                        }
        
                    }else if(escolhaP90 == 2){
                        console.log()
                        console.log(`Terrosristas entram no Bomb usando utilitarios como:`)
                        for (let i = 0; i < execucao.length; i++) {
                            console.log(execucao[i])
                        }
        
                        console.log(`Os Terroristas entram no Bomb, você aparece, pegando eles de e consegue matar 1
                        Porem é notado pelos outros, e como esta com uma arma para curta distancia, acaba morrendo
                        sem matar mas nenhum`)
                        console.log(`Terroristas conseguem plantar a bomba...`)
                        console.log()
        
                        let menor = Math.floor(Math.random() * 10);
                        if (menor <= 5){
                            console.log(`Seus amigos estão longe, quando eles chegam conseguem matar ou outros inimigos então.... TODOS COMEMORAM.... `)
                            console.log(`Porem infelizmente logo se dão conta que não possuem kit defuse e então.... não conseguem desarmar a bomba`)
                            console.log()
        
                            console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                            let tentarNovamente = prompt("Deseja tentar novamente? ")
                            if (tentarNovamente == "nao"){
                                campeao += 2
                            }
                        }else {
                            console.log(`Seus amigos estão longe, quando eles chegam conseguem matar 3 inimigos, porem sobrou Fallen, O TOP 1 MUNDIAL.... e acabou matando todo seu time `)
                            console.log()
        
                            console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                            let tentarNovamente = prompt("Deseja tentar novamente? ")
                            if (tentarNovamente == "nao"){
                                campeao += 2
                            }
                        }
                    }else if(escolhaP90 == 3){
                        console.log()
                        console.log(`Terrosristas entram no Bomb usando utilitarios como:`)
                        for (let i = 0; i < execucao.length; i++) {
                            console.log(execucao[i])
                        }
        
                        console.log(`Entram 4 terroristas no Bomb, você gastantando todas as balas, por não estar tão perto consegue
                        matar apenas 2 Terroristas e acaba sendo morto pelos outros`)
                        console.log()
        
                        let menor = Math.floor(Math.random() * 10);
                        if (menor <= 5){
                            console.log(`Seus amigos estão longe, quando eles chegam conseguem matar ou outros inimigos então.... TODOS COMEMORAM.... `)
                            console.log(`Porem infelizmente logo se dão conta que não possuem kit defuse e então.... não conseguem desarmar a bomba`)
                            console.log()
        
                            console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                            let tentarNovamente = prompt("Deseja tentar novamente? ")
                            if (tentarNovamente == "nao"){
                                campeao += 2
                            }
                        }else {
                            console.log(`Seus amigos estão longe, quando eles chegam conseguem matar 2 inimigos, porem sobrou Fallen, O TOP 1 MUNDIAL.... e acabou matando todo seu time `)
                            console.log()
        
                            console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                            let tentarNovamente = prompt("Deseja tentar novamente? ")
                            if (tentarNovamente == "nao"){
                                campeao += 2
                            }
                        }
                    }

                    //           CASO ESCOLHER A ARMA ERRADA


                }else if(armaEscolhida == "M4A1S-S"){
                    console.log()
                    console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e Erro o Bomb que eles iriam... `)
                    console.log(`Infelizmente seus amigos que estão naquele Bomb não conseguem segurar os Terroristas, assim so restando você`)
                    console.log(`E Você acaba morrendo para eles...`)
                    console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                    let tentarNovamente = prompt("Deseja tentar novamente? ")
                    if (tentarNovamente == "nao"){
                        campeao += 2
                    }
                }else if(armaEscolhida == "Awp"){
                    console.log()
                    console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e Erro o Bomb que eles iriam... `)
                    console.log(`Infelizmente seus amigos que estão naquele Bomb não conseguem segurar os Terroristas, assim so restando você`)
                    console.log(`E Você acaba morrendo para eles...`)
                    console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                    let tentarNovamente = prompt("Deseja tentar novamente? ")
                    if (tentarNovamente == "nao"){
                        campeao += 2
                    }
                }
            
            }else if(trBomb >= 6){
                console.log()
                console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e Erro o Bomb que eles iriam... `)
                console.log(`Infelizmente seus amigos que estão naquele Bomb não conseguem segurar os Terroristas, assim so restando você`)
                console.log(`E Você acaba morrendo para eles...`)
                console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                let tentarNovamente = prompt("Deseja tentar novamente? ")
                if (tentarNovamente == "nao"){
                    campeao += 2
                }
            }
        }else if(trBomb >= 6){
            console.log()
            console.log(`Voce esta de ${armaEscolhida}, no Bomb A, e Erro o Bomb que eles iriam... `)
            console.log(`Infelizmente seus amigos que estão naquele Bomb não conseguem segurar os Terroristas, assim so restando você`)
            console.log(`E Você acaba morrendo para eles...`)
            console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
            let tentarNovamente = prompt("Deseja tentar novamente? ")
            if (tentarNovamente == "nao"){
                campeao += 2
            }
        }
    }else if(escolhaBomb == 2){
        console.log(`Você escolheu o Bomb B...
        Agora resta saber se os Terroristas iram para o Bomb A ou Bomb B (Há 50% de chances em cada Bomb)`)
        console.log()
        if(trBomb <= 5){
            // console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e acertou o Bomb que eles iriam... `)
            // console.log(`Porem você esta Sózinho protegento esse Bomb`)
            // console.log()

            if(armaEscolhida == "P90"){
                console.log(`Você esta com uma sub metralhadora e escuta eles vindo, qual sua jogada?...
                Opção 1 = Você se esconde na entrada do bomb, para tentar pegar eles desprevinido
                Opção 2 = Você fica no fundo do Bomb trocanto tiro de longe
                Opção 3 = Você fica no meio do Bomb atraz de caixas para lhe ajudar`)

                let escolhaP90 = +prompt("Qual sua escolha? ")

                if(escolhaP90 == 1){
                    console.log()
                    console.log(`Terrosristas entram no Bomb usando utilitarios como:`)
                    for (let i = 0; i < execucao.length; i++) {
                        console.log(execucao[i])
                    }

                    console.log(`Entram os 5 Terroristas no Bomb, eles não olham para tras, cada um correndo para um lugar no Bomb
                    POREM, você esta nas costas dos 5, quando começa a atirar, cosegue matar 4 facilmente, sobrando apenas 1...
                    Você recarrega e enquanto isso o ultimo esta escondido atraz das caixas, você escuta o barulho de ele Plantando a Bomba
                    e então descide Partir para cima....`)
                    console.log()

                    console.log(`(As Smokes ainda estão ali, então isso da ao ultimo inimigo tempo para plantar a bomba)`)

                    console.log(`Assim então matando o ultimo inimigo e restando apenas Desarmar a Bomba para Ganhar o jogo`)

                    if(defuse == "sim"){
                        console.log()
                        console.log(`Você possui um kit defuse, assim então dando tempo de desarmar a bomba antes de ela explodir...`)
                        campeao += 15
                    }else {
                        console.log()
                        console.log(`Você não possui um kit defuse, assim acaba não dando tempo de desarmar a bomba antes de ela explodir...`)
                        console.log()

                        console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                        let tentarNovamente = prompt("Deseja tentar novamente? ")
                        if (tentarNovamente == "nao"){
                            campeao += 2
                        }
                    }

                }else if(escolhaP90 == 2){
                    console.log()
                    console.log(`Terrosristas entram no Bomb usando utilitarios como:`)
                    for (let i = 0; i < execucao.length; i++) {
                        console.log(execucao[i])
                    }

                    console.log(`Os Terroristas entram no Bomb, você aparece, pegando eles de e consegue matar 1
                    Porem é notado pelos outros, e como esta com uma arma para curta distancia, acaba morrendo
                    sem matar mas nenhum`)
                    console.log(`Terroristas conseguem plantar a bomba...`)
                    console.log()

                    let menor = Math.floor(Math.random() * 10);
                    if (menor <= 5){
                        console.log(`Seus amigos estão longe, quando eles chegam conseguem matar ou outros inimigos então.... TODOS COMEMORAM.... `)
                        console.log(`Porem infelizmente logo se dão conta que não possuem kit defuse e então.... não conseguem desarmar a bomba`)
                        console.log()

                        console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                        let tentarNovamente = prompt("Deseja tentar novamente? ")
                        if (tentarNovamente == "nao"){
                            campeao += 2
                        }
                    }else {
                        console.log(`Seus amigos estão longe, quando eles chegam conseguem matar 3 inimigos, porem sobrou Fallen, O TOP 1 MUNDIAL.... e acabou matando todo seu time `)
                        console.log()

                        console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                        let tentarNovamente = prompt("Deseja tentar novamente? ")
                        if (tentarNovamente == "nao"){
                            campeao += 2
                        }
                    }
                }else if(escolhaP90 == 3){
                    console.log()
                    console.log(`Terrosristas entram no Bomb usando utilitarios como:`)
                    for (let i = 0; i < execucao.length; i++) {
                        console.log(execucao[i])
                    }

                    console.log(`Entram 4 terroristas no Bomb, você gastantando todas as balas, por não estar tão perto consegue
                    matar apenas 2 Terroristas e acaba sendo morto pelos outros`)
                    console.log()

                    let menor = Math.floor(Math.random() * 10);
                    if (menor <= 5){
                        console.log(`Seus amigos estão longe, quando eles chegam conseguem matar ou outros inimigos então.... TODOS COMEMORAM.... `)
                        console.log(`Porem infelizmente logo se dão conta que não possuem kit defuse e então.... não conseguem desarmar a bomba`)
                        console.log()

                        console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                        let tentarNovamente = prompt("Deseja tentar novamente? ")
                        if (tentarNovamente == "nao"){
                            campeao += 2
                        }
                    }else {
                        console.log(`Seus amigos estão longe, quando eles chegam conseguem matar 2 inimigos, porem sobrou Fallen, O TOP 1 MUNDIAL.... e acabou matando todo seu time `)
                        console.log()

                        console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                        let tentarNovamente = prompt("Deseja tentar novamente? ")
                        if (tentarNovamente == "nao"){
                            campeao += 2
                        }
                    }
                }
            }else if(armaEscolhida == "M4A1-S"){
                console.log()
                console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e Erro o Bomb que eles iriam... `)
                console.log(`Infelizmente seus amigos que estão naquele Bomb não conseguem segurar os Terroristas, assim so restando você`)
                console.log(`E Você acaba morrendo para eles...`)
                console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                let tentarNovamente = prompt("Deseja tentar novamente? ")
                if (tentarNovamente == "nao"){
                    campeao += 2
                }
            }else if(armaEscolhida == "Awp"){
                console.log()
                console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e Erro o Bomb que eles iriam... `)
                console.log(`Infelizmente seus amigos que estão naquele Bomb não conseguem segurar os Terroristas, assim so restando você`)
                console.log(`E Você acaba morrendo para eles...`)
                console.log(`Infelizmente Você acaba perdendo o jogo dos CAMPEOES....`)
                let tentarNovamente = prompt("Deseja tentar novamente? ")
                if (tentarNovamente == "nao"){
                    campeao += 2
                }
            }
        
        
        }else if(trBomb >= 6){
            console.log(`Voce esta de ${armaEscolhida}, no Bomb B, e Erro o Bomb que eles iriam... `)
        }
    }
}
console.log()
pontos = 1000

if (campeao > 10){
    console.log(`Meus parabens, você ganhou o jogo...`)
    console.log(`Seus pontos atualmente são = ${pontos}`)
    console.log(`E você se encontra no TOP 1 GAMERS CLUB, assim realizando seu sonho..`)
    console.log()

    console.log(`
        OBRIGADO POR JOGAR!!!!
                    
            ▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▒▒▒▓▒▒▓▒▒▒▒
            ▒▒▒▒▓▒▒▓▒▒▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒
            ▒▓▒▒▒▒▒▒▒▒▓▒
            ▒▒▓▓▓▓▓▓▓▓▒▒
            ▒▒▒▒▒▒▒▒▒▒▒▒


    `)
}else {
    console.log(`Mais sorte da proxima vez.....................`)
}
    
 
