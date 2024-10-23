var numeros = new Array();
numeros[0] = "/cards/2_of_";
numeros[1] = "/cards/3_of_";
numeros[2] = "/cards/4_of_";
numeros[3] = "/cards/5_of_";
numeros[4] = "/cards/6_of_";
numeros[5] = "/cards/7_of_";
numeros[6] = "/cards/8_of_";
numeros[7] = "/cards/9_of_";
numeros[8] = "/cards/10_of_";
numeros[9] = "/cards/ace_of_";
numeros[10] = "/cards/jack_of_";
numeros[11] = "/cards/king_of_";
numeros[12] = "/cards/queen_of_";

var figuras = new Array();
figuras[0] = "clubs";
figuras[1] = "diamonds";
figuras[2] = "hearts";
figuras[3] = "spades";

var baraja = [];

for (var i = 0; i < numeros.length; ++i) {
    for (var j = 0; j < figuras.length; j++) {
        baraja.push(numeros[i] + figuras[j] + ".png");
    }
}

function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}


function jugar() {
    var barajaMezclada = barajarArray(baraja);  
    var cartasAleatorias = barajaMezclada.slice(0, 5); 

     
    var contenedorCartas = document.getElementById("cartas");

    
    contenedorCartas.innerHTML = "";
    var contenedorRutas = document.getElementById("cartas-rutas");
    contenedorRutas.innerHTML = "";

    
    cartasAleatorias.forEach(function(carta) {
        var img = document.createElement("img");
        img.src = carta; 
        img.alt = "Carta"; 
        img.style.width = "100px"; 
        img.style.margin = "10px";
        contenedorCartas.appendChild(img); 
    });
}
