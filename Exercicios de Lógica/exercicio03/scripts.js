function media (nota1, nota2, nota3) {
    let pesoNota1 = nota1 * 0.4
    let pesoNota2 = nota2 * 0.4
    let pesoNota3 = nota3 * 0.2

    let mediaNotas = pesoNota1 + pesoNota2 + pesoNota3

    if(mediaNotas < 5) {
        console.log('Você está reprovado' + ' ' + `Sua média foi ${mediaNotas}`)
    } else if (mediaNotas >= 5 && mediaNotas < 7) {
        console.log('Você está de recuperação' + ' ' + `Sua média foi ${mediaNotas}`)
    } else if(mediaNotas >= 7){
        console.log('Você está aprovado' + ' ' +  `Sua média foi ${mediaNotas}`)
    }
}

media(3,9,7) // 6,20
media(9,9,7) // 8,6
media(3,2,3) // 5
