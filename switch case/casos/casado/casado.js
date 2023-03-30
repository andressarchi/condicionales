let estadoCivil = prompt("ingrese soltero o casado");
let casado = estadoCivil == "casado";
switch (casado) {
    case true:
    console.log("muy bien");
        break;
    default:
        console.log("felicidades")
        break;
}