const raio = parseInt(prompt("Insira o raio do circulo:"));
if (raio != 0) {
  area = Math.PI * raio**2;
}
console.log("A área do circulo é", area);