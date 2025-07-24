function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function calcularFactorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }
    return numero * calcularFactorial(numero - 1);
}

function dolarAReal(dolar){
    return dolar * 4.80
}

function areaYParametroRectangulo(base,altura){
    let area = base*altura;
    let perimetro = 2 *(base + altura);
    return area,perimetro;
}

function areaYPerimetroCirculo(radio){
    let area = Math.PI * (radio * radio);
    let perimetro = 2 * Math.PI * radio;
    return area, perimetro;
}

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}