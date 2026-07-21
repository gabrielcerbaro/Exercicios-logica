function somaImpares(arr) {
    let soma = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0) {
            soma = arr[i] + soma
        }
    }
    return soma
}

console.log(somaImpares([1, 2, 3, 4, 5]))
console.log(somaImpares([10, 7, 8, 11]))
console.log(somaImpares([2, 4, 6, 8]));
