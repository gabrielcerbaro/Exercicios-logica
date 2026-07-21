function contarFrequencia(arr) {
    let numeroMaisFrequente = '';
    let maiorQuantidade = 0;

    for(let i = 0; i < arr.length; i++) {
        let contador = 0

        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === arr[i]) {
                contador++
            }
        }
        if(contador > maiorQuantidade) {
            numeroMaisFrequente = arr[i]
            maiorQuantidade = contador
        }
    }

    return numeroMaisFrequente
}

console.log(contarFrequencia([1, 2, 3, 2, 4, 2, 5]))
console.log(contarFrequencia([7, 8, 7, 9, 8, 7]))
console.log(contarFrequencia([-1, -2, -1, -3, -2, -1]))