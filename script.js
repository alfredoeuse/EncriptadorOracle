var txfrase = document.querySelector(".tex-area");
var mensaje = document.querySelector(".mensaje");
var btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"


//Encriptar mensaje

function btnEncriptar() {
    const textoEncriptado = encriptar(txfrase.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    txfrase.value = ""
    btnCopy.style.display = "block"
    document.getElementById('caja-h3').style.display = 'none';
    document.getElementById('caja-h4').style.display = 'none';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }        
        return stringEncriptada;
    }
}

//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(txfrase.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"
    txfrase.value = ""  
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

//botón copiar

function copiar() {

    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("El texto fue Copiado")
}


