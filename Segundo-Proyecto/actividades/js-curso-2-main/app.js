let titulo = document.querySelector('h1');
titulo.textContent = "Hora del Desafío";

function clickConsole() {
    console.log('El botón fue clicado');
}

function clickAlert() {
    alert('Yo amo JS');
}

function clickPrompt() {
    let ciudad = prompt('¿Cuál es una ciudad de brazil?');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function clickSuma() {
    let num1 = parseInt(prompt('Ingrese el primer número:'));
    let num2 = parseInt(prompt('Ingrese el segundo número:'));
    let suma = num1 + num2;
    alert(`La suma es: ${suma}`);
}
