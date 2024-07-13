let nome = ""
let idade = 0
let altura = 0
let peso = 0
let IMC = 0

nome = prompt("Olá, insira seu nome: ");
console.log (nome)
idade = parseInt(prompt ("Agora insira sua idade: "))
console.log (idade)
altura = parseFloat(prompt ("Insira sua altura: "))
console.log(altura)
peso = parseInt(prompt ("insira seu peso: "))
console.log(peso)

IMC = 0
IMC = peso / (altura * altura)

let anoNasc = 0
anoNasc = 2023 - idade

console.log("Olá "  + nome + ", voce tem " + idade + "anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + IMC + "kg/m²")