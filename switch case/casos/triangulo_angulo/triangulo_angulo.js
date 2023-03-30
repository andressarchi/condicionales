let angulo1 = parseFloat(prompt("ingrese el angulo1"));
let angulo2 = parseFloat(prompt("ingrese el angulo2"));
let angulo3 = parseFloat(prompt("ingrese el angulo3"));
let triangulo = angulo1 + angulo2 + angulo3
switch (triangulo == 180) {
    case true:
        console.log("la suma de los triangulos son igual a 180")
        break;
    case false:
        console.log("la suma de los triangulos no son iguales a 180")
        break;
    default:
        break;
}