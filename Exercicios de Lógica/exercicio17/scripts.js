function segundoMaior(arr) {
    let maior = -Infinity
    let segundoMaior = -Infinity

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maior) {
            segundoMaior = maior
            maior = arr[i]
        } else if (arr[i] > segundoMaior) {
            segundoMaior = arr[i]
        }
    }
    return segundoMaior

}

console.log(segundoMaior([5, 6, 10, 24, -3]))
console.log(segundoMaior([-1, -10, -9, -6]))