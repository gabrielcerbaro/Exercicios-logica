function aprovados(arr) {

    if(arr.length === 0) {
        return 'Não há parâmetros para análise'
    }

    let contador = 0
    let contadorReprovados = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 7) {
            contador++
        } else {
            contadorReprovados++
        }
    }

    return {
        aprovados: contador,
        reprovados: contadorReprovados
    }
}

console.log(aprovados([8, 5, 9, 7, 10]))
// 4
console.log(aprovados([3, 4, 5]))
// 0
console.log(aprovados([7, 7, 7]))
// 3
console.log(aprovados([10]))
// 1
console.log(aprovados([]))
// else if
