function mostrar() {
    event.preventDefault(); // Evita el recargue de la página

    // Entradas
    const os = 8000;
    const aros = 5000;
    const dedos = 7500;

    // Bebidas
    const coctel = 18000;
    const sangria = 50000;
    const agua = 1500;

    //especiales
    const rat = 17000;
    const cerebro =22000;
    const monsterguesa= 19000;
    // Obtener la cantidad y las opciones seleccionadas
    let cant = parseInt(document.getElementById("cant").value);
    let opc = parseInt(document.getElementById("opc").value);
    let cant2 = parseInt(document.getElementById("cant2").value);
    let opc2 = parseInt(document.getElementById("opc2").value);
    let cant3 = parseInt(document.getElementById("cant3").value);
    let opc3 = parseInt(document.getElementById("opc3").value);
    // Variable para almacenar el resultado
    let resultado = 0;

    if ((cant > 0 && opc > 0) || (cant2 > 0 && opc2 > 0) || (cant3 > 0 && opc3 > 0)) {
        respuesta.style.display = "block";

        // Cálculos para entradas
        if (cant > 0) {
            switch (opc) {
                case 1:
                    resultado += os * cant;
                    break;
                case 2:
                    resultado += aros * cant;
                    break;
                case 3:
                    resultado += dedos * cant;
                    break;
                default:
                    alert(`Opción de entrada no válida`);
            }
        }
        // Seleccionar el caso según la opción de bebida
        if (cant2 > 0) {
            switch (opc2) {
                case 1:
                    resultado += coctel * cant2;
                    break;
                case 2:
                    resultado += sangria * cant2;
                    break;
                case 3:
                    resultado += agua * cant2;
                    break;
                default:
                    alert(`Opción de bebida no válida`);
            }
        }
        if (cant3 > 0) {
            switch (opc3) {
                case 1:
                    resultado += rat * cant3;
                    break;
                case 2:
                    resultado += cerebro * cant3;
                    break;
                case 3:
                    resultado += monsterguesa * cant3;
                    break;
                default:
                    alert(`Opción de bebida no válida`);
            }
        }

        // Mostrar el resultado total
        document.getElementById("resultado").innerHTML = `Total : ${resultado}`;
    } else {
        respuesta.style.display = "block";
        document.getElementById("resultado").innerHTML = `Verifique sus datos`;
    }
}
