function maiorSalario(obj) {

    if(obj.length === 0) {
        return 'Não há parâmetros para verificar'
    }

    let funcionario = null

    for(let i = 0; i < obj.length; i++) {
        if(obj[i].salario >= 0) {

            if(funcionario === null) {
                funcionario = obj[i]
            } else if (obj[i].salario > funcionario.salario){
                funcionario = obj[i]
            }
        }
    }

    if(funcionario === null) {
        return 'Não há funcionários que recebam salário'
    }

    return funcionario

}


console.log(maiorSalario([
    { nome: "Carlos", salario: 3500 },
    { nome: "Ana", salario: 5200 },
    { nome: "Pedro", salario: 4100 }
]))
// Ana

console.log(maiorSalario([
    { nome: "Lucas", salario: 2000 }
]))
// Lucas

console.log(maiorSalario([
    { nome: "João", salario: -100 },
    { nome: "Maria", salario: -50 }
]))
// Maria

console.log(maiorSalario([]))
// Decida como tratar esse caso.