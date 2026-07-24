function buscarFuncionario(lista, id) {

    if(lista.length === 0) {
        return null
    }

    for(let i = 0; i < lista.length; i++) {
        if(lista[i].id === id) {
            return lista[i]
        }
    }

    return null
}

const funcionarios = [
    { id: 1, nome: "Carlos" },
    { id: 2, nome: "Ana" },
    { id: 3, nome: "Pedro" },
    { id: 4, nome: "Lucas" }
];

console.log(buscarFuncionario(funcionarios, 3))