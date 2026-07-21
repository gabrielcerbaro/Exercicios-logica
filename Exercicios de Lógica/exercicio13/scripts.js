function numerosPares(arr) {
    let contador = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            contador++
        }
    }
    return contador
}

console.log(numerosPares([2, 5, 8, 9, 12]))
console.log(numerosPares([4, 5, 5, 9, 12]))
console.log(numerosPares([5, 5, 3, 9, 11]))
