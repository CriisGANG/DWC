function ready(){
document.getElementById('cambiarTexto').addEventListener('click', function() {
    const parrafo = document.getElementById('miParrafo');
    parrafo.textContent = 'Este es el nuevo texto del párrafo. ¡El contenido ha sido modificado!';
});
}
document.addEventListener("DOMContentLoaded", ready);

