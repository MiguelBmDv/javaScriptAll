function sumar(n1,n2){
    var resultado=n1+n2;
    var res=document.getElementById("resultado")
    if(n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML=`Total : ${resultado}`;

    }else{
        respuesta.style.display="block";
        res.innerHTML=`verifique sus datos`;
      
    }
}

function restar(n1,n2){
    var res=document.getElementById("resultado")
    var resultado = n1 - n2;
        respuesta.style.display="block";
        res.innerHTML=`Total : ${resultado}`;
    
}
function multiplicar(n1,n2){
    var res=document.getElementById("resultado")
    var resultado = n1 * n2;
    respuesta.style.display="block";
    res.innerHTML=`Total : ${resultado}`;
}
function dividir(n1,n2){
    var res=document.getElementById("resultado")
    var resultado = n1 / n2;
    respuesta.style.display="block";
    res.innerHTML=`Total : ${resultado}`;
}
function potencia(n1,n1){
    var res=document.getElementById("resultado")
    var resultado = n1 * n1;
    respuesta.style.display="block";
    res.innerHTML=`Total : ${resultado}`;
}
    
    // Creo una funcion
    function mostrar() {
        // evitar recargue de pagina
        event.preventDefault();
        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)
        let opc = parseInt(document.getElementById("opc").value)
        // se plantean los casos deacuerdo al valor almacenado en el prompt anterior    
            switch(opc){
                //caso de suma
                case 1:
                        sumar(n1,n2)
                        break;
            //caso de resta
                case 2:
                        restar(n1,n2)
                        break;
                //caso de multiplication
                case 3:
                    multiplicar(n1,n2)
                    break;
                //caso de division
                case 4:
                    dividir(n1,n2)
                    break;
                break;
                //caso de potenciacion
                case 5:
                    potencia(n1,n1)
                    break;
                break;
        
                // se establece un default para opciones no validas
                default:
                    alert(`Opcion no valida :)`);
                    break;
                }

        }
        