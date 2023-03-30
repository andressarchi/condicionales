// Pedir al usuario que ingrese el radio del círculo

let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

// Calcular el área y el perímetro del círculo
const area = Math.PI * radio * radio;
const perimetro = 2 * Math.PI * radio;

// Imprimir los resultados

console.log("El área del círculo es: " + area);
console.log("El perímetro del círculo es: " + perimetro);