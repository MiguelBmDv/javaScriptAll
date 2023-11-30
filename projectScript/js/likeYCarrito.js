//evento que esta esperando que se accione una tecla, + y - para iniciarlizar las funciones
window.addEventListener("keydown",(e)=>{
    if(e.key=="+"){
        incremento()
    }
    else if(e.key=="-"){
        decremento()
    }
})
//contador con el id valor
let contador=0;
const valor=document.getElementById("valor")

//Funcion para incrementar el contador
function incremento(){
    contador+=1;
    valor.innerHTML=contador;
}
//Funcion para decrementar el contador
function decremento(){
    if(contador>0){
    contador-=1;
    valor.innerHTML=contador;
    }else{
        contador=0;
        valor.innerHTML=contador;
    }
}     
//Funcionar que le pone el valor de 0, es decir lo resetea
function resetear(){
    contador=0;
    valor.innerHTML=contador;
}


//Aqui se hace una funcion similar pero esta va para el carrito de compras, donde se necesitan de dos parametros el productor y el valor de este, donde dependiendo de su valor, avanzara a partir de la cantidad

let valoresTotales = {};
//Funcion que incrementa
function incrementoC(producto, valorProducto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    let contador = parseInt(cantidadElement.innerHTML) + 1;

    cantidadElement.innerHTML = contador;

    if (valoresTotales[producto] === undefined) {
        valoresTotales[producto] = 0;
      }
  
      valoresTotales[producto] += valorProducto; 
      valorTElement.innerHTML = valoresTotales[producto].toFixed(2);
}

//Funcion que decrementa
function decrementoC(producto, valorProducto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    let contador = parseInt(cantidadElement.innerHTML);

    if (contador > 0) {
      contador -= 1;
      cantidadElement.innerHTML = contador;
      // Verificar si ya hay un valor total almacenado para este producto
      if (valoresTotales[producto] === undefined) {
        valoresTotales[producto] = 0;
      }
      valoresTotales[producto] -= valorProducto; // Restar al valor total
      valorTElement.innerHTML = valoresTotales[producto].toFixed(2);
    } else {
      contador <= 0;
      cantidadElement.innerHTML = contador;
      valorTElement.innerHTML = 0;
    }
  }

// Función que resetea
function resetearC(producto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
  
    if (valoresTotales[producto] === undefined) {
      valoresTotales[producto] = 0;
    }
    valoresTotales[producto] -= parseFloat(valorTElement.innerHTML); 
    cantidadElement.innerHTML = 0;
    valorTElement.innerHTML = 0;
  }




  // Función para realizar la compra
  function comprar() {
    let totalCompra = 0;

    // Sumar todos los valores totales
    for (const producto in valoresTotales) {
      totalCompra += valoresTotales[producto];
    }

    alert(`Compra realizada con éxito. Total: $${totalCompra.toFixed(2)}`);
    resetearC()

    valoresTotales = {};
  }
