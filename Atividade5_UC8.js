
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

