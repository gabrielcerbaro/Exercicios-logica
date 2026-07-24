function filtrarAtivos(lista) {

    let funcionariosAtivos = []

    for(let i = 0; i < lista.length; i++){ 
        if(lista[i].ativo) {
            funcionariosAtivos.push(lista[i])
        }
    }

    return funcionariosAtivos
}


const funcionarios = [
    { id: 1, nome: "Carlos", ativo: true },
    { id: 2, nome: "Ana", ativo: false },
    { id: 3, nome: "Pedro", ativo: true },
    { id: 4, nome: "Lucas", ativo: false },
    { id: 5, nome: "Mariana", ativo: true }
];

console.log(filtrarAtivos(funcionarios))

console.log(filtrarAtivos([]))

console.log(filtrarAtivos([
    { id: 1, nome: "João", ativo: false }
]))