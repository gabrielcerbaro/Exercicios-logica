function menorNota (objeto) {
    let menorMedia = objeto[0]

    for(let i = 0; i < objeto.length; i++) {
        if(objeto[i].nota < menorMedia.nota) {
            menorMedia = objeto[i]
        }
    }
    return menorMedia
}

const alunos1 = [
    { nome: "Carlos", nota: 8 },
    { nome: "Ana", nota: 10 },
    { nome: "Pedro", nota: 6 },
    { nome: "Julia", nota: 9 }
];

const alunos2 = [
    { nome: "Maria", nota: 7 },
    { nome: "João", nota: 5 },
    { nome: "Lucas", nota: 8 }
];

const alunos3 = [
    { nome: "Gabriel", nota: 10 }
];

console.log(menorNota(alunos1));
console.log(menorNota(alunos2));
console.log(menorNota(alunos3));