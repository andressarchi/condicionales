//creamos una constante para el iva 

const iva = 0.19 ;

//le pedimos al usuario el precio de algun produccto 
let precio = parseFloat(prompt("ingrese el precio de el producto"));

//hacemos la operacion para tener el precio final

let final = precio + precio * iva 

//le mostramos el precio final de el producto al usuario 
console.log("el precio de el producto con el iva es de:"+ final ); 