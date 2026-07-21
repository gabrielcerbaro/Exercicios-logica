function palindromo(palavra) {
    palavra = palavra.toLowerCase()

    let palavraInvertida = ''

    for(let i = 0; i < palavra.length; i++) {
        palavraInvertida = palavra[i] + palavraInvertida
    }
    console.log(palavraInvertida)   

    if(palavraInvertida === palavra) {
        return true
    } else {
        return false
    }
}

console.log(palindromo('Gabriel'))
console.log(palindromo('Arara'))
console.log(palindromo('ovo'))
console.log(palindromo('arara'))
