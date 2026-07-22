function mediaTurma(arr) {

    if(arr.length === 0) {
        return 'Não há parâmetros para calcular'
    }

    let soma = 0

    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }

    return soma / arr.length
}

console.log(mediaTurma([8, 7, 10, 5]))
// 7.5

console.log(mediaTurma([10, 10, 10]))
// 10

console.log(mediaTurma([5, 5, 5, 5]))
// 5

console.log(mediaTurma([6, 8]))
// 7

console.log(mediaTurma([]))
// Decida como tratar esse caso.