// Variable booleana que indica si queremos cambiar la imagen
let cambiarImagen = true;

// Seleccionamos la imagen por su ID
const imagen = document.getElementById('miImagen');

// Verificamos la condición
if (cambiarImagen) {
    // Si la condición es verdadera, cambiamos el atributo src de la imagen
    imagen.src = 'img/amarillo.png'; // Cambia a la ruta de la nueva imagen
}
