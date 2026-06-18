// PARTE 1: 

function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);
}

function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`);
}

function restar(a, b) {
    console.log(`Resultado Resta: ${a - b}`);
}

function multiplicar(a, b) {
    console.log(`Resultado Multiplicación: ${a * b}`);
}

realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);

// PARTE 2:

function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");

    setTimeout(() => {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}

console.log("Inicio del programa.");

tareaNoBloqueante(() => {
    console.log("Continuando después de la tarea.");
});

console.log("Fin del programa.");

// PARTE 3: 

function solicitarJSON(callback) {
    setTimeout(() => {
        console.log("Solicitando archivo JSON...");
        callback();
    }, 3000);
}

function reproducirAudio(callback) {
    setTimeout(() => {
        console.log("Reproduciendo audio...");
        callback();
    }, 1000);
}

function leerSensor(callback) {
    setTimeout(() => {
        console.log("Leyendo sensor...");
        callback();
    }, 500);
}

console.log("--- Iniciando procesos asíncronos ---");

solicitarJSON(() => {
    console.log("Archivo JSON recibido.");
});

reproducirAudio(() => {
    console.log("Audio finalizado.");
});

leerSensor(() => {
    console.log("Datos del sensor listos.");
});

// PARTE 4: 

function simularDescarga(nombreArchivo, callback) {
    console.log(`Iniciando descarga de ${nombreArchivo}...`);

    setTimeout(() => {
        console.log(`Descarga de ${nombreArchivo} completada.`);
        callback();
    }, 4000);
}

simularDescarga("manual.pdf", () => {
    console.log("Archivo listo para abrir.");
});

// PARTE 5:

obtenerUsuario(() => {
    obtenerPedidos(() => {
        obtenerFactura(() => {
            enviarCorreo(() => {
                console.log("Proceso finalizado");
            });
        });
    });
});
