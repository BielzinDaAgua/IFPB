const n1 = parseInt(prompt("Insira o primeiro número da operação:"));
const n2 = parseInt(prompt("Insira o segunfo número da operação:"));
const sinal = prompt("insira o sinal da operação:")


if (sinal === "soma" || sinal === "+") {
  total = n1 + n2
} else if (sinal === "subtração" || sinal === "-") {
  total = n1 - n2
} else if (sinal === "multiplicação" || sinal === "*") {
  total = n1 * n2
} else if (sinal === "divisão" || sinal === "/") {
  total = n1 / n2
} else {
  console.log("Operador não identificado")
}

console.log("O total foi:", total)