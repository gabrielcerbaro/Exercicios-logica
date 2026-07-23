function melhorCustoBeneficio(obj) {

    if(obj.length === 0) {
        return 'Não há parâmetros para análise'
    }

    let produto = null
    let custoBeneficio = 0

    for(let i = 0; i < obj.length; i++) {

        if(obj[i].preco > 0 && obj[i].nota >= 0) {
            if(produto === null) {
                produto = obj[i]
                custoBeneficio = obj[i].nota / obj[i].preco
            } else if(custoBeneficio < obj[i].nota / obj[i].preco) {
                produto = obj[i]
                custoBeneficio = obj[i].nota / obj[i].preco
            }
        }
    }

    return {
        produto,
        custoBeneficio
    }
}


console.log(melhorCustoBeneficio([
    { nome: "Mouse", preco: 100, nota: 8 },
    { nome: "Teclado", preco: 200, nota: 9 },
    { nome: "Monitor", preco: 800, nota: 10 }
]));

console.log(melhorCustoBeneficio([
    { nome: "Livro", preco: 50, nota: 10 },
    { nome: "Curso", preco: 500, nota: 10 }
]));

console.log(melhorCustoBeneficio([
    { nome: "Caneta", preco: 5, nota: 8 }
]));

console.log(melhorCustoBeneficio([]));