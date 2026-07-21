function numeroPrimo (num) {

    let divisao = 0

    if(num === 0 || num === 1) {
        return 'Esse número não pode ser classificado'
    }

    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            divisao++
        }
    }

    if (divisao === 2) {
        return 'Esse número é Primo'
    } else if(divisao > 2){
        return 'Esse número não é primo'
    }


}

console.log(numeroPrimo(0))
console.log(numeroPrimo(5))
console.log(numeroPrimo(4))
console.log(numeroPrimo(17))