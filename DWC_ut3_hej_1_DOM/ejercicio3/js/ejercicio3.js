// Array de nombres
const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

// Crear un elemento <ul>
const ul = document.createElement('ul');

// Iterar sobre el array y crear un <li> para cada nombre
nombres.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre; // Asignar el nombre al contenido del <li>
    ul.appendChild(li); // Agregar el <li> a la <ul>
});

// Agregar la <ul> al DOM dentro del <body>
document.body.appendChild(ul);
