function melhorAprovado(obj) {

    if(obj.length === 0) {
        return 'Não há parâmetros para verificar.'
    }

    let maiorNota = null

    for(let i = 0; i < obj.length; i++) {
        if(obj[i].nota >=7){
            
            if(maiorNota === null) {
                maiorNota = obj[i]
            } else if(obj[i].nota > maiorNota.nota) {
                maiorNota = obj[i]
            }
        }
    }

    if(maiorNota === null){
        return 'Todos os alunos foram reprovados'
    }
    
    return maiorNota
}


const alunos1 = [
    { nome: "Carlos", nota: 8 },
    { nome: "Ana", nota: 5 },
    { nome: "Pedro", nota: 10 },
    { nome: "Julia", nota: 7 },
    { nome: "Lucas", nota: 6 }
];

const alunos2 = [
    { nome: "Maria", nota: 6 },
    { nome: "João", nota: 5 }
];

const alunos3 = [
    { nome: "Gabriel", nota: 9 }
];

console.log(melhorAprovado(alunos1));
// { nome: "Pedro", nota: 10 }

console.log(melhorAprovado(alunos2));
// Decida como tratar esse caso

console.log(melhorAprovado(alunos3));
// { nome: "Gabriel", nota: 9 }