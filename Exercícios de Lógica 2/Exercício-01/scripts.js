function maiorNota(arr) {
    let maiorNota = -Infinity

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maiorNota) {
            maiorNota = arr[i]
        }
    }
    return maiorNota
}

console.log(maiorNota([8, 5, 9, 7, 10]))
// 10
console.log(maiorNota([3, 6, 2]))
// 6
console.log(maiorNota([10]))
// 10
console.log(maiorNota([7, 7, 7]))
// 7
console.log(maiorNota([-3, -8, -1]))
// -1