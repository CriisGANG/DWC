function Marca(nombre) {
    this.nombre = nombre;
}

function Modelo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

var marcas = {
    ford: new Marca("FORD"),
    citroen: new Marca("CITROEN"),
    seat: new Marca("SEAT")
};

var coches = [
    new Modelo(marcas.ford, "Focus"),
    new Modelo(marcas.ford, "Fiesta"),
    new Modelo(marcas.citroen, "Saxo"),
    new Modelo(marcas.citroen, "C4")
];

console.log(coches);

// Seleccionar el contenedor 'div'
var div = document.querySelector("#app");

// Crear la tabla
var table = document.createElement("TABLE");
table.id = "coches";

// Crear encabezado de la tabla
var cabecera = ["MARCA", "MODELO"];
var thead = document.createElement("thead");
var tr = document.createElement("tr");

for (let i = 0; i < cabecera.length; i++) {
    var th = document.createElement("th");
    th.innerText = cabecera[i];
    tr.appendChild(th);
}

thead.appendChild(tr);
table.appendChild(thead);

// Crear cuerpo de la tabla
var tbody = document.createElement("tbody");

for (let i = 0; i < coches.length; i++) {
    var tr = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
        var td = document.createElement("td");
        if (j === 0) {
            td.innerText = coches[i].marca.nombre; // Columna de marca
        } else if (j === 1) {
            td.innerText = coches[i].modelo; // Columna de modelo
        }
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

table.appendChild(tbody);
