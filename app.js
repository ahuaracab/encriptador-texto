function encriptar() {
    let solicitudTexto = document.getElementById("solicitud_texto").value;
    let encriptado = "";

    let patron = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    for (let letra of solicitudTexto) {
        encriptado += patron[letra] || letra;
    }

    document.getElementById("encriptador__respuesta__container").style.display = "none";
    document.getElementById("encriptador__respuesta__container__hidden").style.display = "flex";
    document.getElementById("respuesta_texto").textContent = encriptado;
    document.getElementById("solicitud_texto").value = "";
}

function desencriptar() {
    let solicitudTexto = document.getElementById("solicitud_texto").value;
    let desencriptado = "";

    let patron = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let min = Infinity;
    let max = 0;

    for (let key in patron) {
        min = Math.min(min, key.length);
        max = Math.max(max, key.length);
    }

    let i = 0;

    while (i < solicitudTexto.length) {
        let encontrado = false;

        for (let j = max; j >= min; j--) {
            let subcadena = solicitudTexto.substring(i, i + j);

            if (patron.hasOwnProperty(subcadena)) {
                desencriptado += patron[subcadena];
                i += j;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            desencriptado += solicitudTexto[i];
            i++;
        }
    }

    document.getElementById("encriptador__respuesta__container").style.display = "none";
    document.getElementById("encriptador__respuesta__container__hidden").style.display = "flex";
    document.getElementById("respuesta_texto").textContent = desencriptado;
    document.getElementById("solicitud_texto").value = "";
}

function copiar() {
    let texto = document.getElementById('respuesta_texto').innerHTML;
    navigator.clipboard.writeText(texto);
}

function validarTexto() {
    let texto = document.getElementById('solicitud_texto').value;
    let regex = /^$|^[a-z]+$/;
    let esValido = regex.test(texto);
    if (!esValido) {
        document.getElementById("error-texto").textContent = "Solo se permiten letras minúsculas y sin acentos.";
        document.getElementById("encriptar").disabled = true;
        document.getElementById("desencriptar").disabled = true;
    } else {
        document.getElementById("error-texto").textContent = "";
        document.getElementById("encriptar").disabled = false;
        document.getElementById("desencriptar").disabled = false;
    }
}
