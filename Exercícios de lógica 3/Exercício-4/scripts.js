function somarVendas(lista) {

    let valorVendedores = {}

    for(let i = 0; i < lista.length; i++) {
        let vendedor = lista[i].vendedor
        let valor = lista[i].valor

        if(valorVendedores[vendedor] === undefined) {
            valorVendedores[vendedor] = valor
        } else {
            valorVendedores[vendedor] += valor
        }
    }

    return valorVendedores

}

const vendas = [
    { vendedor: "João", valor: 150 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 300 },
    { vendedor: "Pedro", valor: 100 },
    { vendedor: "Maria", valor: 50 },
    { vendedor: "João", valor: 100 }
];
console.log(somarVendas(vendas))