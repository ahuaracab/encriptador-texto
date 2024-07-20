# Encriptador de Texto 🔒

Este proyecto es un encriptador y desencriptador de mensajes. Permite transformar un texto en un formato encriptado y también puede desencriptar el texto a su forma original. El encriptador utiliza un algoritmo de sustitución simple para ocultar el contenido del mensaje, mientras que el desencriptador usa un algoritmo de búsquedas por subcadenas en todo el texto.

## Requisitos principales

1. Patrón de encriptado:
```
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
```
2. El desencriptado es de modo inverso al patrón de encriptado.
3. No debe funcionar solo con letras mayúsculas.
1. No deben funcionar con letras con acentos o caracteres especiales.
1. Debe ser posible convertir un texto a la versión encriptada y también devolver el texto encriptado a su versión original.
1. Debe existir un campo para la
inserción del texto que será encriptado/desencriptado, y el usuario debe poder escoger entre las dos opciones.
1. Debe existir un campo para mostrar el resultado del texto encriptado/desencriptado.
1. Debe existir un botón de encriptado y un botón de desencriptado.
1. Debe existir un botón que copie el texto encriptado/desencriptado en el portapapeles, es decir, que tenga la misma funcionalidad del ```Ctrl+C```.

## Ejemplo
```
gato => gaitober
gaitober" => gato
```

## Características Principales 🎬

### Home 🏠

![Home](assets/home.png)

### Función Encriptar 🔐

![](assets/encriptar.gif)

### Función Desencriptar 🔑

![](assets/desencriptar.gif)

### Función Copiar 📌

![](assets/copiar.gif)

### Validación ✅

![](assets/validar.gif)

## Despliegues 📦

Puede visualizar este proyecto en acción en los siguientes recursos:

- GitHub Pages: https://ahuaracab.github.io/encriptador-texto/
- Vercel: https://encriptador-texto-mu.vercel.app/

## Instalación 🔧

Si quiere tener este proyecto y desplegarlo localmente repita los siguientes pasos:

### Pre-requisitos 📋

- Instalar Git
- Instalar Visual Studio Code (Recomendado)
- Instalar plugin Live Server (De Visual Studio Code)

### Ejecución 💻

#### Clonar repositorio

```bash
git clone https://github.com/ahuaracab/encriptador-texto
```

#### Entrar a carpeta de repositorio

```bash
cd encriptador-texto
```

#### Abrir repositorio en Visual Studio Code

```bash
code .
```

#### Ejecutar Live Server

```bash
Click derecho a index.html y seleccionar Open with Live Server
```

## Construido con 🛠️

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Me ayudó a estructurar mi interfaz web. Definí la estructura de mi página con botones, párrafos, áreas de texto, enlaces e imágenes.

- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Me permitió dar estilo visual a mi sitio. Apliqué variables, colores, fuentes, márgenes y diseños a los elementos HTML.

- [Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Flexbox) - Lo utilicé para diseñar y organizar los elementos de mi interfaz web. Esta tecnología me permitió crear diseños flexibles y responsivos, adaptándose a diferentes tamaños de pantalla y dispositivos.

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Fue esencial para implementar la funcionalidad de encriptación y desencriptación. Escribí funciones en JavaScript para manipular el texto, aplicar algoritmos de cifrado y mostrar los resultados en la página.

## Autores ✒️

- **Angelo Huaraca** - _Web Developer_ - [ahuaracab](https://github.com/ahuaracab)

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mire el archivo [LICENSE](LICENSE) para más detalles

## Expresiones de Gratitud 🎁

Quiero agradecer a Alura y Oracle por capacitarme en su programa ONE, sin ellos no hubiera podido tener las herramientas para desarrollar este desafío, el primero de muchos que están por venir! 🎓

---

⌨️ con ❤️ por [Angelo Huaraca](https://github.com/ahuaracab) 😊
