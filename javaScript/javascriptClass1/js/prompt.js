nacimiento=parseInt(prompt("Ingrese tu año de nacimiento"));
const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad = fechaActual-nacimiento;

var nombre = prompt("Ingresa tu nombre");
// var edadS = parseInt(prompt("Ingresa tu edad"));

var parr = document.getElementById("mensaje");
if(edad >0 && edad <= 8){
    parr.textContent = `Bienvenido niñ@ ${nombre}  usted tiene ${edad} años de edad, eres muy pequeño `;

}else if(edad >8 && edad <18){
    parr.textContent = `Bienvenido joven ${nombre}  usted tiene ${edad} años de edad, eres menor de edad `;
}else if(edad >=18 && edad <120){
        parr.textContent = `Bienvenido señor(a) ${nombre}  usted tiene ${edad} años de edad, ya eres mayor de edad `; 
}else{
    parr.textContent = `Usuari@ ${nombre}  usted no puede tener ${edad} años de edad, registrate nuevamente`; 
}
