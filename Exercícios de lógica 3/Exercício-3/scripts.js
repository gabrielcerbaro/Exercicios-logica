function contarCategorias(lista) {
    let categorias = {}

    for(let i = 0; i < lista.length; i++) {
        let listaCategoria = lista[i].categoria

        if(categorias[listaCategoria] === undefined) {
           categorias[listaCategoria] = 1
        } else {
            categorias[listaCategoria]++
    }
    }
    return categorias

}

const produtos = [
    { nome: "Notebook", categoria: "Eletrônicos" },
    { nome: "Mouse", categoria: "Eletrônicos" },
    { nome: "Arroz", categoria: "Alimentos" },
    { nome: "Feijão", categoria: "Alimentos" },
    { nome: "Sabão", categoria: "Limpeza" },
    { nome: "Detergente", categoria: "Limpeza" },
    { nome: "Teclado", categoria: "Eletrônicos" }
];

console.log(contarCategorias(produtos))