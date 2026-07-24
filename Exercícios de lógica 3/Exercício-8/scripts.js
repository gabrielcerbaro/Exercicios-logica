function clientesRepetidos(lista) {
    let maisDeUmPedido = []
    let contador = {}

    for(let i = 0; i < lista.length; i++) {
        let cliente = lista[i].cliente

        if(contador[cliente] === undefined) {
            contador[cliente] = 1
        } else {
            contador[cliente]++
        }
    }

    for(let cliente in contador) {
        if(contador[cliente] > 1) {
            maisDeUmPedido.push(cliente)
        }
    }
    
    return maisDeUmPedido
}

const pedidos = [
    { cliente: "Ana", pedido: 101 },
    { cliente: "Carlos", pedido: 102 },
    { cliente: "Ana", pedido: 103 },
    { cliente: "Pedro", pedido: 104 },
    { cliente: "Carlos", pedido: 105 },
    { cliente: "Maria", pedido: 106 }
];

console.log(clientesRepetidos(pedidos))