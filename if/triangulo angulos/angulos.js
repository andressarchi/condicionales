// Pedimos al usuario que ingrese los tres ángulos
let angulo1 = parseFloat(prompt("Ingresa el primer ángulo en grados:"));
let angulo2 = parseFloat(prompt("Ingresa el segundo ángulo en grados:"));
let angulo3 = parseFloat(prompt("Ingresa el tercer ángulo en grados:"));

// Calculamos la suma de los ángulos
let sumaAngulos = angulo1 + angulo2 + angulo3;

// Verificamos si la suma de los ángulos es igual a 180 grados
if (sumaAngulos === 180) {
  console.log("Los ángulos ingresados corresponden a un triángulo.");
} else {
  console.log("Los ángulos ingresados NO corresponden a un triángulo.");
}
