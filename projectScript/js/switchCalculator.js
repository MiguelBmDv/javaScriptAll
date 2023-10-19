// Creo una funcion
function calc() {
// evitar recargue de pagina
event.preventDefault();
//se crea una variable con un prompt para preguntar los casos a usar
var opc2 = parseInt(prompt("Selecciona una opción:\n1. Suma\n2. Resta\n3. Multiplicacion \n4. Division \n5. Mayor entre dos"));
// se plantean los casos deacuerdo al valor almacenado en el prompt anterior    
    switch(opc2){
        //caso de suma
        case 1:
                var val1 = parseFloat(prompt("Ingresa un numero:"));
                var val2 = parseFloat(prompt("Ingresa otro numero:"));
                var sum = val1 + val2;
                alert (`Su suma es:  ${sum}`);
                break;
       //caso de resta
        case 2:
                var val1 = parseFloat(prompt("Ingresa un numero:"));
                var val2 = parseFloat(prompt("Ingresa otro numero:"));
                var rest = val1 - val2;
                alert(`Su resta es:  ${rest}`);
                break;
        //caso de multiplication
        case 3:
                var val1 = parseFloat(prompt("Ingresa un numero:"));
                var val2 = parseFloat(prompt("Ingresa otro numero:"));
                var mult = val1 * val2;
                alert(`Su multiplicacion es:  ${mult}`); 
                break;
        //caso de division
        case 4:
                var val1 = parseFloat(prompt("Ingresa un numero:"));
                var val2 = parseFloat(prompt("Ingresa otro numero:"));
                var div = val1 / val2;
                alert(`Su división es:  ${div}`); 
        break;
        //caso de cual es mayor ( aqui se usan condicionales para verificar cual es el numero mayor)
        case 5:
                var val1 = parseFloat(prompt("Ingresa un numero:"));
                var val2 = parseFloat(prompt("Ingresa otro numero:"));
                if (val1 < val2){
                    alert(`Su mayor es:  ${val2}`);
                }else if(val1 > val2){
                    alert(`Su mayor es:  ${val1}`);
                }else if(val1 == val2){
                    alert(`Son iguales`);
                }else{alert("Pon algo valido")}
        break;
                // se establece un default para opciones no validas
        default:
            alert(`Opcion no valida :)`);
            break;
        }
}
