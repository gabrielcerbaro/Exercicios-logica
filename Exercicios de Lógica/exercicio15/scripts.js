function contarLetras(frase) {
    let contador = 0

    for(let i = 0; i < frase.length; i++) {
        if(frase[i] !== ' ') {
            contador++
        }
    }
    return contador
}

console.log(contarLetras('Olá mundo'))
console.log(contarLetras('Gabriel Cerbaro'))
console.log(contarLetras('A espanha foi campeã do mundo'))
console.log(contarLetras('JavaScript'))