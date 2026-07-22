function produtoMaisCaro (obj) {
    let produto = obj[0]

    for(let i = 0; i < obj.length; i++) {
        if(obj[i].preco > produto.preco) {
            produto = obj[i]
        }
    }

    return produto
}


const produtos1 = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 300 }
];

const produtos2 = [
    { nome: "Notebook", preco: 4500 },
    { nome: "Celular", preco: 3200 },
    { nome: "Tablet", preco: 1800 }
];

const produtos3 = [
    { nome: "Caneta", preco: 3 }
];

console.log(produtoMaisCaro(produtos1));
// { nome: "Monitor", preco: 900 }

console.log(produtoMaisCaro(produtos2));
// { nome: "Notebook", preco: 4500 }

console.log(produtoMaisCaro(produtos3));
// { nome: "Caneta", preco: 3 }