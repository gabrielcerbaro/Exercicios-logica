function inverterString(frase) {
    let fraseInvertida = ''

    for(let i = 0; i < frase.length; i++) {
        fraseInvertida = frase[i] + fraseInvertida
    }
    return fraseInvertida
}

console.log(inverterString('Gabriel'))
console.log(inverterString('Corinthians'))
console.log(inverterString('Philadelphia'))
