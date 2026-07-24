function produtoMaisVendido(lista) {
    let produtoMaisVendido = {}
    let qtdVendas = 0

    // criar um for para criar uma lista concatenada por produto
    let listaProdutos = {}

    for(let i = 0; i < lista.length; i++) {
        let produto = lista[i].produto
        let qtdVendidas = lista[i].quantidade

        if(listaProdutos[produto] === undefined) {
            listaProdutos[produto] = qtdVendidas
        } else {
            listaProdutos[produto] += qtdVendidas
        }
    }

    // criar um for para percorrer a nova lista e devolver o produto mais vendido
    for(let produtos in listaProdutos) {
        if(listaProdutos[produtos] > qtdVendas) {
            qtdVendas = listaProdutos[produtos]
            produtoMaisVendido = produtos
        }
    }

    return {
        produto: produtoMaisVendido,
        total: qtdVendas
    }
}

const vendas = [
    { produto: "Mouse", quantidade: 2 },
    { produto: "Teclado", quantidade: 1 },
    { produto: "Mouse", quantidade: 3 },
    { produto: "Monitor", quantidade: 1 },
    { produto: "Teclado", quantidade: 4 },
    { produto: "Mouse", quantidade: 1 }
];

console.log(produtoMaisVendido(vendas))