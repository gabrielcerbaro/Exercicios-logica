function maiorMedia (obj) {
    if(obj.length === 0) {
        return 'Não há parâmetros para análise'
    }

    let aluno = null
    let media = 0

    for(let i = 0; i < obj.length; i++){
        let soma = 0

        for(let j = 0; j < obj[i].notas.length; j++) {
            soma += obj[i].notas[j]
        }

        if(media < soma / obj[i].notas.length) {
            aluno = obj[i]
            media = soma / obj[i].notas.length
        }
    }
    return {
        aluno,
        media
    }
}

console.log(maiorMedia([
    {
        nome: "Carlos",
        notas: [10, 9, 8]
    },
    {
        nome: "Ana",
        notas: [8, 8, 8]
    },
    {
        nome: "Pedro",
        notas: [9, 9, 10]
    }
]));

console.log(maiorMedia([
    {
        nome: "Lucas",
        notas: [7, 7, 7]
    }
]));

console.log(maiorMedia([]));