function somaPares (num) {

    let soma = 0

    for(let i = 0; i <= num; i+= 2) {
        if(i % 2 === 0) {
            soma += i
        }
    }
    return soma
}

console.log(somaPares(10))