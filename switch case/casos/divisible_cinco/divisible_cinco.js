let numero = parseFloat(prompt("ingrese un numero"));
switch (numero % 5 == 0) {
    case true:
        console.log("el numero es divisible entre 5")
        break;
    case false:
        console.log("el numero no es divisible entre 5")
        break;
    default:
        break;
}