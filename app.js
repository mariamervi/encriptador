const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

console.log(textArea);

function btnencriptar(){
    const textoEncriptado =encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodgo = [["e","enter"],["i","ines"],["a","ai"],["o","ober"],["u","ufat"]];
   /* stringEncriptado = stringEncriptado.tolowerCase()*/

    for(let i=0; i < matrizCodgo.length;i++){
        if(stringEncriptado.includes(matrizCodgo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodgo[i][0], matrizCodgo[i][1])
        }
    }
    return stringEncriptado
}

function btndesencriptar(){
    const textoEncriptado =desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptado){
    let matrizCodgo = [["e","enter"],["i","ines"],["a","ai"],["o","ober"],["u","ufat"]];
    /*stringDesencriptado = stringDesencriptado.tolowerCase()*/

    for(let i=0; i < matrizCodgo.length;i++){
        if(stringDesencriptado.includes(matrizCodgo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodgo[i][1], matrizCodgo[i][0])
        }
    }
    return stringDesencriptado
}

function portapapeles(){
    let inputText = document.getElementById("mensaje");
    
    inputText.select();
    inputText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputText.value);

    alert("Texto copiado");
}