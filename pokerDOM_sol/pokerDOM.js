function Carta(valor, palo, color){
    this.valor = valor;
    this.palo = palo;
    this.color = color;
}

let arrayValores = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "jack", "queen", "king"];
let arrayPalos = ["clubs", "diamonds", "hearts", "spades"];

let baraja = [];
let color;

for (let palo of arrayPalos) {
    for (let valor of arrayValores) {
        if (palo === "hearts" || palo ==="diamonds") {
            color = "rojo";
        } else {
            color = "negro";
        }

        baraja.push(new Carta(valor, palo, color));
        
    }
}

/* function barajar(baraja) {
    return baraja.sort(
        function() {
            return Math.random() - 0.5;
        }
    )
} */

/* function barajar(baraja) {
    let carta;
    let reparto = [];

    
    while (reparto.length < 5) {
        carta = baraja[Math.floor(Math.random()*baraja.length)];

        if (!reparto.includes(carta)) {
            reparto.push(carta);
        }
    }
    
} */

/* FACUNDO
let hand = document.querySelectorAll("img");
var cartasReveladas;

function valor() {
    return Math.floor(Math.random() * 13) + 1
}

function palo() {
    switch (Math.floor(Math.random() * 4) + 1){
        case (1): return "hearts";
        case (2): return "clubs";
        case (3): return "diamonds";
        case (4): return "spades";
    }
}

function estaRevelado(carta) {

}


function drawCards(hand){
    let newCard;

    for (let card of hand){
        do {
            newCard = new Carta(valor(), palo())
        } while (cartasReveladas.length < 52 && estaRevelada(newCard))

    }
} */

function obtenerMano(baraja){
    let mano = [];
    let indice;

    for (let i=0; i<5; i++) {
        indice = Math.floor(Math.random()*baraja.length);
        mano.push(baraja.splice(indice, 1)[0]);
    }

    return mano
}



function jugar() {
    let app = document.querySelector("#app");
    app.innerHTML = "";

    let mano = obtenerMano(baraja);

    for (let carta of mano) {
        console.log(carta);
        app.innerHTML += `<img height= 200 width= 150 src="cards/${carta.valor}_of_${carta.palo}.png">`;
    }

    let hayPareja = false;

    for (let i=0; i<mano.length; i++) {
        for (let j=i+1; j<mano.length; j++){
            if (mano[i].valor === mano[j].valor) {
                hayPareja = true;
            }
        }
    }

    if (hayPareja) {
        app.innerHTML += "<p>Has ganado!!</p>"
    }
}