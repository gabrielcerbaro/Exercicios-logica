function contarVogais (palavra) {

    palavra = palavra.toLowerCase();

    let vogais = ['a', 'e', 'i', 'o', 'u']

    let contador = 0

    for(let i = 0; i < palavra.length; i++) {
        
        if(vogais.includes(palavra[i])) {
            contador ++
        }
    }

    return contador
}

console.log(contarVogais('Gabriel'))
console.log(contarVogais('javascript'))