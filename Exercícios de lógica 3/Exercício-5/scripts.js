function maiorVendedor(lista) {
    let maiorVendedor = {}
    let maiorValor = 0

    let listaVendedores = {}

    for(let i = 0; i < lista.length; i++){
        let vendedor = lista[i].vendedor
        let valor = lista[i].valor
        
        if(listaVendedores[vendedor] === undefined) {
            listaVendedores[vendedor] = valor
        } else {
            listaVendedores[vendedor] += valor
        }
    }

    for(let vendedor in listaVendedores) {
        if(listaVendedores[vendedor] > maiorValor) {
            maiorValor = listaVendedores[vendedor]
            maiorVendedor = vendedor
        }
    }

    return {
        nome: maiorVendedor,
        total: maiorValor
    }

}

const vendas = [
    { vendedor: "João", valor: 150 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 300 },
    { vendedor: "Pedro", valor: 100 },
    { vendedor: "Maria", valor: 50 },
    { vendedor: "João", valor: 100 }
];

console.log(maiorVendedor(vendas))