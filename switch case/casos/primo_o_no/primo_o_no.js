let numero = parseInt(prompt("ingresa un numero entre 1 y 15"));
let primo = numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13
switch (primo) {
    case true:
        console.log("es primo")
        break;
    case false:
        console.log("no es primo")
        break;
    default:
        break;
}