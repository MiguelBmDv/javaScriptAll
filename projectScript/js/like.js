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