function fatorial(num) {

    let resultado = 1

    for(let i = 1; i <= num; i++) {
        resultado = i * resultado
        console.log(resultado)
    }
}

fatorial(5)