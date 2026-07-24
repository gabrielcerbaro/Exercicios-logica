function agruparPorCargo(lista) {
    let listaAgrupada = {}

    //Criar um for para percorrer a lista e agrupar os nomes por cargo
    for(let i = 0; i < lista.length; i++) {
        let nome = lista[i].nome
        let cargo = lista[i].cargo
        // fazer um if para verificar se ainda não há uma lista
        if(listaAgrupada[cargo] === undefined) {
            //se não tiver vamos criar uma lista com o nome do cargo e logo abaixo incluir o nome na lista
            listaAgrupada[cargo] = []
        }
        // se já existir vamos apenas incluir o nome na lista que tem o nome do cargo dela
        listaAgrupada[cargo].push(nome)
        
    }

    return listaAgrupada
}

const funcionarios = [
    { nome: "Ana", cargo: "Dev" },
    { nome: "Carlos", cargo: "QA" },
    { nome: "João", cargo: "Dev" },
    { nome: "Maria", cargo: "UX" },
    { nome: "Pedro", cargo: "QA" }
];

console.log(agruparPorCargo(funcionarios))