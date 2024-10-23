// Array de partituras de ejemplo
const partitures = [
    {
        title: "La Balanguera",
        notes: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"],
        lyrics: "Letra de La Balanguera..."
    },
    {
        title: "Happy Birthday",
        notes: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"],
        lyrics: "Letra de Happy Birthday..."
    }
];

// Variable para la búsqueda
let cerca = [];

// Constructor de objeto Nota
function Nota(name, type) {
    this.name = name; // Nombre de la nota
    this.type = type; // Tipo de nota (sostenido o no)
}

// Función para añadir una nota a la búsqueda
function addCerca(name, type) {
    const nota = new Nota(name, type);
    cerca.push(nota);
}

// Función para buscar en las partituras
function cercador() {
    const resultados = [];

    // Iterar sobre cada partitura
    partitures.forEach(partitura => {
        const notes = partitura.notes;

        // Crear un array con solo los nombres de las notas de la búsqueda
        const nombresCerca = cerca.map(nota => nota.name);

        // Comprobar si las notas de la búsqueda están en la partitura
        for (let i = 0; i < notes.length; i++) {
            // Verificar si las notas de búsqueda están en la partitura
            if (notes.slice(i, i + nombresCerca.length).toString() === nombresCerca.toString()) {
                resultados.push(partitura);
                break; // Salir del bucle si se encontró una coincidencia
            }
        }
    });

    // Mostrar resultados
    const resultsContainer = document.querySelector('.results');
    resultsContainer.innerHTML = '<h3>Resultats:</h3>'; // Reiniciar la sección de resultados
    if (resultados.length > 0) {
        resultados.forEach(partitura => {
            resultsContainer.innerHTML += `<p>${partitura.title} <button onclick="showLyrics('${partitura.title}')">Letra</button> <button onclick="playSong('${partitura.title}')">Reproducir Canción</button></p>`;
        });
    } else {
        resultsContainer.innerHTML += "<p>Sense resultats</p>";
    }
}

// Función para mostrar la letra
function showLyrics(title) {
    const partitura = partitures.find(p => p.title === title);
    if (partitura) {
        alert(partitura.lyrics); // Mostrar la letra en una alerta
    }
}

// Función para reproducir la canción (aquí solo se muestra un mensaje, pero puedes implementar la lógica de reproducción)
function playSong(title) {
    alert(`Reproduciendo: ${title}`); // Mensaje temporal
}

// Seleccionar el botón de borrar y el campo de entrada
const clearButton = document.getElementById('clearButton');
const searchInput = document.getElementById('searchInput');

// Función para limpiar la búsqueda
function clearSearch() {
    // Reiniciar el array de búsqueda
    cerca = [];
    // Limpiar el campo de entrada
    searchInput.value = '';
    // Limpiar resultados anteriores
    document.querySelector('.results').innerHTML = '<h3>Resultats:</h3>'; // Reiniciar la sección de resultados
}

// Añadir evento al botón de borrar
clearButton.addEventListener('click', clearSearch);

// Event Listener para la búsqueda cuando se ingresa el texto
searchInput.addEventListener('input', () => {
    // Reiniciar la búsqueda
    cerca = [];
    const inputNotas = searchInput.value.trim().split(" ");
    
    inputNotas.forEach(nota => {
        addCerca(nota, "normal"); // Se puede mejorar según tipo
    });

    cercador(); // Ejecutar la búsqueda
});

// Ejemplo de uso inicial
addCerca("DO", "normal");
addCerca("RE", "normal");
cercador(); // Debería mostrar ["La Balanguera", "Happy Birthday"]

