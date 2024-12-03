// Seleccionamos todos los elementos de encabezado (h1 a h6)
const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

// Cambiamos el estilo de cada encabezado
headers.forEach(header => {
    header.style.color = 'blue';         // Cambiamos el color a azul
    header.style.fontSize = '24px';      // Cambiamos el tamaño de fuente a 24px
    header.style.fontFamily = 'Arial, sans-serif'; // Cambiamos la fuente
});
