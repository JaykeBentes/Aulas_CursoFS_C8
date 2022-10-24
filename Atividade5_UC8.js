
let numeroDeAlunos = 12
let contador = 0
while (contador <= numeroDeAlunos) {

    if (contador== 0){
        console.log("O número atual é ZERO")
    }else if (contador % 2 != 0){
        console.log(`O número ${contador} é ÍMPAR`)
    }else {
        console.log("O número "+ contador +" é PAR")
    }
    contador++
}


let nomeDeAlunos = ["Aluno1", "Aluno2", "Aluno3", "Aluno4"]
for (let nome of nomeDeAlunos){
    console.log(`Esta pessoa se chama ${nome}`)
}


let acompanhado = false
let idade = 33
let ingresso = true

if(idade >= 18 && ingresso == true || acompanhado == true) {
    console.log("Bem vindo a festa!")
}else {
    console.log("Você não pode participar da festa, infelizmente.")
}
