let encriptarBtn = document.getElementById("encriptar");
let desencriptarBtn = document.getElementById("desencriptar");
let copiarBtn = document.getElementById("copiar");

let solicitudTexto = document.getElementById("encriptador__solicitud__texto");
let respuestaTexto = document.getElementById("encriptador__respuesta__texto");
let solicitudAviso = document.getElementById("encriptador__solicitud__aviso");

let respuestaVaciaContainer = document.getElementById("encriptador__respuesta__vacia__container");
let respuestaTextoContainer = document.getElementById("encriptador__respuesta__texto__container");

let placeholderInicial = "Ingrese el texto aquí";

let patronEncriptar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

let patronDesencriptar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar() {
    let texto = solicitudTexto.value;
    console.log(texto)
    let textoEncriptado = "";
    let patron = patronEncriptar;

    for (let letra of texto) {
        textoEncriptado += patron[letra] || letra;
    }

    textoEncriptado = textoEncriptado.trim();
    respuestaTexto.textContent = textoEncriptado;
    solicitudTexto.value = "";
    cambiarPlaceholderEncriptar();
    evaluarTextoEncriptado(textoEncriptado);
}

function desencriptar() {
    let texto = solicitudTexto.value;
    let textoDesencriptado = "";
    let patron = patronDesencriptar;
    let min = Infinity;
    let max = 0;
    let inicio = 0;

    for (let key in patron) {
        min = Math.min(min, key.length);
        max = Math.max(max, key.length);
    }

    while (inicio < texto.length) {
        let encontrado = false;

        for (let fin = max; fin >= min; fin--) {
            let subcadena = texto.substring(inicio, inicio + fin);

            if (patron[subcadena]) {
                textoDesencriptado += patron[subcadena];
                inicio += fin;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            textoDesencriptado += texto[inicio];
            inicio++;
        }
    }
    textoDesencriptado = textoDesencriptado.trim();
    respuestaTexto.textContent = textoDesencriptado;
    solicitudTexto.value = "";
    cambiarPlaceholderDesencriptar();
    evaluarTextoEncriptado(textoDesencriptado);
}

function copiar() {
    let texto = respuestaTexto.innerHTML;
    navigator.clipboard.writeText(texto);
    copiarBtn.textContent = "Copiado!";
    setTimeout(function () {
        copiarBtn.textContent = "Copiar";
    }, 3000);
    setTimeout(function () {
        mostrarPanel();
    }, 3000);
}

function validarTexto() {
    let texto = solicitudTexto.value;
    let regex = /^[a-zñÑ\s]*$/;
    ///el regex me debe aceptar vacio
    let esValido = regex.test(texto);

    if (!esValido) {
        resaltarError();
        deshabilitarBotones();
    } else {
        noResaltarError();
        habilitarBotones();
    }
}

function mostrarPanel() {
    respuestaVaciaContainer.style.display = "flex";
    respuestaTextoContainer.style.display = "none";
}

function ocultarPanel() {
    respuestaVaciaContainer.style.display = "none";
    respuestaTextoContainer.style.display = "flex";
}

function habilitarBotones() {
    encriptarBtn.disabled = false;
    desencriptarBtn.disabled = false;
}

function deshabilitarBotones() {
    encriptarBtn.disabled = true;
    desencriptarBtn.disabled = true;
}

function resaltarError() {
    solicitudAviso.classList.add("error__message");
}

function noResaltarError() {
    solicitudAviso.classList.remove("error__message");
}

function cambiarPlaceholderEncriptar() {
    console.log(solicitudTexto.value.trim())
    console.log(solicitudTexto.value.trim() !== "")

    if (respuestaTexto.value.trim() !== "") {
        console.log("entra")
        solicitudTexto.placeholder = "Se encriptó el texto!!!";
        setTimeout(function () {
            solicitudTexto.placeholder = placeholderInicial;
        }, 2000);
    }
}

function cambiarPlaceholderDesencriptar() {
    console.log(solicitudTexto.value)
    console.log(solicitudTexto.value.trim())

    if (respuestaTexto.value.trim() !== "") {
        solicitudTexto.placeholder = "Se desencriptó el texto!!!";
        setTimeout(function () {
            solicitudTexto.placeholder = placeholderInicial;
        }, 2000);
    }
}

function evaluarTextoEncriptado(texto) {
    if (texto !== "") {
        ocultarPanel();
    } else {
        mostrarPanel();
    }
}