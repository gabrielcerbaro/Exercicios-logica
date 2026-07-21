function media(arr) {

    let soma = arr[0]

    for(let i = 1; i < arr.length; i++) {
        soma = arr[i] + soma
    }
    return soma / arr.length
}

console.log(media([8, 7, 10, 5]))
console.log(media([5, 4, 10, 7]))
console.log(media([3, 7, 6, 5]))
console.log(media([8, 9, 9, 5]))