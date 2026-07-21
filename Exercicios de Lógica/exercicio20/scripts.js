function maiorMedia(objeto) {
    let media = 0
    let mediaMaior = -Infinity
    let melhorAluno = ''
    

    for(let j = 0; j < alunos.length; j++) {
        let soma = 0

        for(let i = 0; i < objeto[j].notas.length; i++) {
            soma = soma + objeto[j].notas[i]
        }
        media = soma / objeto[j].notas.length

        if(media > mediaMaior) {
            mediaMaior = media
            melhorAluno = objeto[j].nome
        }
    }

    return melhorAluno
}

const alunos = [
    {
        nome: "Carlos",
        notas: [10, 10, 9]
    },
    {
        nome: "Ana",
        notas: [8, 9, 8]
    },
    {
        nome: "Pedro",
        notas: [7, 8, 9]
    }
]

console.log(maiorMedia(alunos))