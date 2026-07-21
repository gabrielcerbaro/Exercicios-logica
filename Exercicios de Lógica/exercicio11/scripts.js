function maiorNumero(arr) {
    let maior = arr[0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maior) {
            maior = arr[i]
        }
    }
    return maior
}

console.log(maiorNumero([4, 8, 2, 15, 9]))
console.log(maiorNumero([-10, 25, 8, -3, 42, 17]))
console.log(maiorNumero([-50, -8, -120, -3, -25]))
console.log(maiorNumero([7]))
console.log(maiorNumero([5, 5, 5]))