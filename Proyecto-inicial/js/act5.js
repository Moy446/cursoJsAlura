console.log("Bienvenidos");
let nombre = "Moy";
console.log(`Hola &{nombre}`)
alert(`Hola ${nombre}`)
let lenguaje = prompt("¿Cuál es tu lenguaje de programación favorito?");
console.log(lenguaje);
let valor1 = 2;
let valor2 = 6;
console.log(valor1, valor2);
let resultado = valor1 + valor2;
console.log(`El resultado de la suma es: ${resultado}`)
resultado = valor1 - valor2;
console.log(`El resultado de la resta es: ${resultado}`)
let numero = prompt("Dame un numero de 1 al 10");
if (numero >0){
    console.log("El numero es positivo");
}else if (numero < 0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es cero");
}
for( let i = 1; i<=10; i++){
    console.log(i);
}
let nota = 7;
if (nota> 6){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
console.log(Math.random());
console.log(Math.floor(Math.random()*10 +1))
console.log(Math.floor(Math.random()*1000 +1))

