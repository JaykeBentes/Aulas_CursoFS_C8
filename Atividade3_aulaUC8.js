
var listaDePeca = ["Filtro de ar", "Amortecedor", "Disco de freio"]
    if (listaDePeca.length < 10){
        console.log("É possível cadastrar mais peças")
}   else {
        console.log("A lista esta cheia já")
}


let peso = 350
    if(peso < 100){
        console.log("A peça precisa ter no mínimo 100g")
}   else {
        console.log("A peça possui o peso adequado")
}


let NomePeca = "Caixa de cambio"
    if (nomePeca.length>2){
        console.log("O tamanho do nome da peça está adequado")
}   else {
        console.log("O nome deve ter mais que 3 caracteres, por favor digite um nome adequado")
}


let NomePeca2 = "Bateria"
    switch(nomePeca.length){

        case 0:
            console.log("o nome da peça não pode ser vazio")
            break;
        case 1:
            console.log("o nome da peça tem que ser maior que 1 caracter")
            break;
        case 2:
            console.log("o nome da peça tem que ser maior que 2 caracteres")
            break;
        case 3:
            console.log("o nome da peça tem que ser maior que 3 caracteres")

        default:
            console.log("está correto") 
    }
 

