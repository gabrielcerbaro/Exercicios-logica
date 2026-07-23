function maiorMediaTurma(obj) {

    if(obj.length === 0) {
        return 'Não há parâmetros para análise'
    }

    let turma = null
    let mediaMaiorTurma = 0

    for(let i = 0; i < obj.length; i++) {
        let mediaTurma = 0

        for(let j = 0; j < obj[i].alunos.length; j++) {
            let somaNotas = 0   
            let mediaAluno = 0

            for(let k = 0; k < obj[i].alunos[j].notas.length; k++) {
                somaNotas += obj[i].alunos[j].notas[k]
                
            }
            mediaAluno = somaNotas / obj[i].alunos[j].notas.length

            mediaTurma += mediaAluno / obj[i].alunos.length
        }

        if(mediaTurma > mediaMaiorTurma) {
            mediaMaiorTurma = mediaTurma
            turma = obj[i]
        }
    }

    return {
        turma,
        mediaMaiorTurma
    }
}


console.log(maiorMediaTurma([
    {
        nome: "Turma A",
        alunos: [
            { nome: "Carlos", notas: [10, 9, 8] },
            { nome: "Ana", notas: [8, 8, 8] }
        ]
    },
    {
        nome: "Turma B",
        alunos: [
            { nome: "Pedro", notas: [10, 10, 10] },
            { nome: "Lucas", notas: [9, 9, 9] }
        ]
    }
]));

console.log(maiorMediaTurma([
    {
        nome: "Única",
        alunos: [
            { nome: "João", notas: [7, 7, 7] }
        ]
    }
]));

console.log(maiorMediaTurma([]));