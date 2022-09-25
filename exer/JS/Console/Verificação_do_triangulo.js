const l1 = parseInt(prompt("Primeiro lado:"));
const l2 = parseInt(prompt("Segundo lado:"));
const l3 = parseInt(prompt("Terceiro lado:"));

function triangulo(a, b, c) {
  if (a<=0 || b<=0 || c<=0){
    console.log("none")
  } else if (a>=b+c || b>=a+c || c>=b+a) {
    console.log("none")
  } else if (a==b && b==c){
    console.log("Triangulo equilatero")
  } else if (a==b || b==c || c==a){
    console.log("Triangulo isosceles")
  } else{
    console.log("Triangulo escaleno")
  }
}


triangulo(l1, l2, l3)