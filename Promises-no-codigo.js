/*
    Promise
        * A promessa de que algo irá acontecer
        * Poderá dar certo ou errado
        * Mas irá acontecer
*/

console.log('pedir uber')

let aceitar = true

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve ('pedido aceito!')
    }
    return reject('pedido negado!')
})

console.log('aguardando')

promessa.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))