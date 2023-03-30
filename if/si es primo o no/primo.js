
let numero = parseInt(prompt("Ingresa un número entre 1 y 15:"));

// Verificamos si el número es primo
let esPrimo = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    esPrimo = false;
    break;
  }
}

if (esPrimo) {
  console.log("El número " + numero + " es primo");
} else {
  console.log("El número " + numero + " no es primo");
}
