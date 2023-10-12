// Creo una funcion
function mostrar() {
// evitar recargue de pagina
event.preventDefault();
//se crea una variable con un prompt para preguntar los casos a usar
var opc = parseInt(prompt("Selecciona una opción:\n1. Cuadrado\n2. Triángulo\n3. Rectángulo"));
// se plantean los casos deacuerdo al valor almacenado en el prompt anterior    
switch(opc){
    //caso de A de cuadrado
        case 1:
                var lado = parseFloat(prompt("Ingresa la longitud de un lado del cuadrado:"));
                var aCuadrado = lado * lado;
                if (lado !=0 && aCuadrado !=0){
                    alert (`El área del cuadrado es:  ${aCuadrado}`);
                }else{alert("verifica tus datos");}
                break;
    //caso de A de triangulo
        case 2:
                var base = parseFloat(prompt("Ingresa la base del triángulo:"));    
                var alt = parseFloat(prompt("Ingresa la altura del triángulo:"));
                var aTriangulo = (base * alt) / 2;
                if (base !=0 && alt !=0){
                    alert(`El área del triángulo es:  ${aTriangulo}`);
                }else{alert("verifica tus datos");}
                break;
    //caso de A de rectangulo
        case 3:
            var baseR = parseFloat(prompt("Ingresa la base del rectangulo:"));
            var alturaR = parseFloat(prompt("Ingresa la altura del rectangulo:"));
            var aRectangulo = baseR * alturaR;
            if (baseR !=0 && alturaR !=0){
                alert(`El área del rectangulo es:  ${aRectangulo}`); 
            }else{alert("verifica tus datos");}
            break;
    //default por si no usa algun caso
        default:
            alert(`Opcion no valida :)`);
            break;
        }
}
