let numero = parseFloat(prompt("ingrese un numero"));
switch (numero % 2 == 0) {
    case true:
        console.log("el numero es par")
        break;
    case false:
        console.log("el numero no es par")
        break;
    default:
        break;
}