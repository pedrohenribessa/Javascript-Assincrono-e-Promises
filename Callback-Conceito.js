// Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado=function () {
    return "Olá mundo"
}) {
    console.log('outras tarefas')
    console.log(dado())
}

imprimirDado(function () {
    return "Olá mundo"
})

