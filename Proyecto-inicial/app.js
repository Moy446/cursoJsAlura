// variables
let numeroMaximo = 10;
let randomNum = Math.floor(Math.random()* numeroMaximo) +1; //numero aleatorio entre 1 y 10
let numUser = 0;
let attemp = 0;
let maxIntentos = 3;
//logica para saber el numero de usuario
while (numUser != randomNum){
    numUser = parseInt(prompt("dame el numero que estoy pensando entre el 1 y " + numeroMaximo));
    if (attemp == maxIntentos){
        break;
    }
    if(numUser > randomNum){
        alert("El numero es menor");
    }
    if (numUser<randomNum){
        alert("El numero es mayor");
    }
    attemp ++;
}
numUser == randomNum ? alert(`Adivinaste el numero que era ${randomNum} en el intento ${attemp -1}`) : alert(`Perdiste, el numero era ${randomNum} y al alcanzaste el maximo de ${maxIntentos} de intentos`);

