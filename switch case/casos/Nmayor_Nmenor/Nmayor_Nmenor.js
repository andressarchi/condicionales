let numero1 = parseInt(prompt("ingrese numero1"));
let numero2 = parseInt(prompt("ingrese numero2"));
num = numero1>numero2
switch (num){
    case true:
        console.log("el numero1 es mayor")
        break;
    case false:
        console.log("el numero2 es mayor")
        break;
    default:
        console.log("los numeros son iguales")
        break;
}