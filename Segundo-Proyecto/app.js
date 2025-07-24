let listaNumeros = []; //verifica si el numero ya aparecio
let intentos = 1
let numeroMaximo = 10
let numeroAleatorio = generarNumeroAleatorio();



function asignarTextoElemento(elemento, texto){
    let elementoSeleccionado = document.querySelector(elemento);
    elementoSeleccionado.textContent = texto;
}

function verificarNumero(){
    let numeroUsuario = parseInt(document.querySelector('#valorUsuario').value);
    if (numeroUsuario === numeroAleatorio){ //verificamos si el numero es igual al numero aleatorio
        //mensajes de victoria
        asignarTextoElemento('h1', '¡Felicidades!');
        asignarTextoElemento('p', `¡Has adivinado el número! en ${intentos} ${intentos == 1 ? "intento" : "intentos"}.`); 
        document.querySelector('#reiniciar').disabled = false;
    }else if (numeroUsuario > numeroAleatorio){ //condiciones de fallo
        asignarTextoElemento('p', 'El número es menor que ' + numeroUsuario + '.');
        limpiarCaja();
    }else{
        asignarTextoElemento('p', 'El número es mayor que ' + numeroUsuario + '.');
        limpiarCaja();
    }
    intentos++;
}

function limpiarCaja(){ //lipiamos la caja de texto
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){ //reiniciar el juego
    numeroAleatorio = generarNumeroAleatorio();
    intentos = 0;
    asignarTextoElemento('h1', 'Adivina el número'); // ponemos los valores por defecto
    asignarTextoElemento('p', `Adivina el número que estoy pensando, entre 1 y ${numeroMaximo}.`); // mensaje por defecto
    document.querySelector('#reiniciar').disabled = true; // desabilitamos el boton de reinicio
    limpiarCaja();
}

document.querySelector('#reiniciar').addEventListener('click', () =>{
    reiniciarJuego();
})

    function generarNumeroAleatorio(){
    // Genera un número aleatorio entre 1 y 10
    let numero = Math.floor(Math.random() * 10) + 1;  
    // si ya vimos todos los numeros
    if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento('p','Ya se adivinaste todas las posibilidades')
        return
    }
    if (listaNumeros.includes(numero)){
        return generarNumeroAleatorio();
    }
    listaNumeros.push(numero);
    console.log(numero)
    return numero;
}


asignarTextoElemento('h1', 'Adivina el número');
asignarTextoElemento('p', `Adivina el número que estoy pensando, entre 1 y ${numeroMaximo}.`); 