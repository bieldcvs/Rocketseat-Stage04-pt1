let numberOne = Number(prompt("Digite o primeiro numero : "))
let numberTwo = Number(prompt("Digite o segundo numero : "))

alert(`
Soma : ${numberOne + numberTwo}
`)
alert(`
Subtracao : ${numberOne - numberTwo}
`)
alert(`
Multiplicação : ${numberOne * numberTwo}
`)
alert(`
Divisão : ${numberOne / numberTwo}
`)
alert(`
Resto da divisão : ${numberOne % numberTwo}
`)

alert(`
De acordo com a soma , ${numberOne + numberTwo} ele é um numero : ${(numberOne + numberTwo) % 2 == 0 ? "par" : "impar"}
`)
alert(`
Eles são numeros : ${numberOne == numberTwo ? "Iguais" : "Diferentes"}
`)
