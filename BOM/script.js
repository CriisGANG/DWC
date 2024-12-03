// Variable para almacenar la referencia a la ventana emergente
let popupWindow;

// 1. Mostrar la URL actual
function mostrarURLActual() {
    alert(`URL actual: ${window.location.href}`);
}

// 2. Navegación en el historial
function irAtras() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("No hay más páginas en el historial hacia atrás.");
    }
}

function irAdelante() {
    window.history.forward();
}

// 3. Mostrar información del navegador
function mostrarInfoNavegador() {
    let navegador = window.navigator.userAgent;
    let idioma = window.navigator.language;
    let enLinea = window.navigator.onLine ? "Sí" : "No";

    alert(
        `Información del Navegador:\n` +
        `- Navegador: ${navegador}\n` +
        `- Idioma: ${idioma}\n` +
        `- ¿En línea?: ${enLinea}`
    );
}

// 4. Redirigir a una URL
function redirigirURL() {
    let url = document.getElementById("urlInput").value.trim();
    if (url) {
        try {
            let parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);
            window.location.assign(parsedUrl.href);
        } catch (error) {
            alert("La URL ingresada no es válida. Por favor, verifica e inténtalo de nuevo.");
        }
    } else {
        alert("Por favor, introduce una URL.");
    }
}

// 5a. Abrir una ventana emergente
function abrirPopup() {
    if (!popupWindow || popupWindow.closed) {
        popupWindow = window.open(
            "https://www.yahoo.com",
            "VentanaEmergente",
            "width=800,height=600,resizable,scrollbars=yes"
        );
    } else {
        alert("La ventana emergente ya está abierta.");
    }
}

// 5b. Cerrar la ventana emergente
function cerrarPopup() {
    if (popupWindow && !popupWindow.closed) {
        popupWindow.close();
    } else {
        alert("No hay una ventana emergente abierta para cerrar.");
    }
}
