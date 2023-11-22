window.addEventListener("keydown",(e)=>{
    if(e.key=="+"){
        incremento()
    }
    else if(e.key=="-"){
        decremento()
    }
})

let contador=0;
const valor=document.getElementById("valor")

function incremento(){
    contador+=1;
    valor.innerHTML=contador;
}
    
function decremento(){
    if(contador>0){
    contador-=1;
    valor.innerHTML=contador;
    }else{
        contador=0;
        valor.innerHTML=contador;
    }
}     

function resetear(){
    contador=0;
    valor.innerHTML=contador;
}




function incrementoC(producto, valorProducto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    let contador = parseInt(cantidadElement.innerHTML, 10) + 1;

    cantidadElement.innerHTML = contador;

    if (contador > 0) {
        valorCompra = contador * valorProducto;
        valorTElement.innerHTML = valorCompra;
    }
}

function decrementoC(producto, valorProducto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    let contador = parseInt(cantidadElement.innerHTML, 10);

    if (contador > 0) {
        contador -= 1;
        cantidadElement.innerHTML = contador;
        valorCompra = valorCompra - valorProducto;
        valorTElement.innerHTML = valorCompra;
    } else {
        contador = 0;
        cantidadElement.innerHTML = contador;
    }
}

function resetearC(producto) {
    const cantidadElement = document.getElementById(`cantidad${producto}`);
    const valorTElement = document.getElementById(`valorT${producto}`);
    cantidadElement.innerHTML = 0;
    valorTElement.innerHTML = 0;
}
