const textArea = document.querySelector(".section__textarea");
const mensaje = document.querySelector(".section__mensaje");
const titulo = document.querySelector('.section__title');
const imagen = document.querySelector('.section__img');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

titulo.textContent = "Ningún mensaje fue encontrado";

function updateUI(textoEncriptado) {
  mensaje.value = textoEncriptado;
  textArea.value = "";
  titulo.textContent = "Texto encriptado con éxito";
  mensaje.style.backgroundImage = "none";
  imagen.style.display = "none"; // Agregado para ocultar la imagen
}

function btnEncriptar() {
  console.log(textArea.value);

  if (textArea.value != "") {
    const textoEncriptado = encriptar(textArea.value);
    updateUI(textoEncriptado);
  } else {
    titulo.textContent = "No has escrito nada";
    mensaje.textContent = "No hay nada que encriptar";
  }
}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensaje.value);
  textArea.value = textoDesencriptado;
  mensaje.value = "";
  titulo.textContent = "Puedes encriptar un nuevo mensaje!!!";
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}
