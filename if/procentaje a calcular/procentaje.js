// Pedimos al usuario que ingrese la cantidad
let cantidad = parseFloat(prompt("Ingresa la cantidad:"));

// Pedimos al usuario que ingrese el porcentaje a calcular
let porcentaje = parseFloat(prompt("Ingresa el porcentaje a calcular:"));

// Calculamos el porcentaje de la cantidad ingresada
let resultado = (cantidad * porcentaje) / 100;

// Mostramos el resultado al usuario
console.log("El " + porcentaje + "% de " + cantidad + " es: " + resultado);