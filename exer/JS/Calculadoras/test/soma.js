const num = [1, 40, 5];

/*
const novo = num.reduce((acu, num) => acu + num, 0);
console.log(novo)
*/

/*
const somar = num.reduce(function(acu, num) {
  return acu + num;
},0);
console.log(somar);
*/

const somar = (itens) => itens.reduce((acumulador, item) => acumulador + item);

console.log(somar([1, 4, 7, 9]));


const multiplicar = (itens) => itens.reduce((acumulador, item) => acumulador * item);

console.log(multiplicar([1, 4, 7]));

function Somar(item) {
    let soma = 0
    for (let i = 0; i < item.length; i++) {   
      if ((item[i] % 2) != 0) {  
        soma += item[i];
      } 
    }
    return soma
}

const item = [7, 3, 1, 2];
 
console.log(Somar(item));
  
/*
Não consegui com "reduce" :(
*/