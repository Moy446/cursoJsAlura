listaGenerica = [];
lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');

function mostrarLista(lista){
    for (let i = 0 ; i<lista.length; i++){
        console.log(lista[i])
    }
}

function mostrarListaInversa(lista){
    for (let i = lista.length -1 ; i>-1; i--){
        console.log(lista[i])
    }
}

function promedio(lista){
    let suma = 0
    for(let i = 0; i<lista.length;i++){
        suma += lista[i]
    }
    return suma/lista.length
}

function numBiggerSmaller(lista){
    let grande = Math.max(lista)
    let pequeno = Math.min(lista)
    console.log(grande, pequeno)
}

function suma(lista){
    let suma = 0
    for(let i = 0; i<lista.length;i++){
        suma += lista[i]
    }
    return suma
}

function encontrarElemento(lista,elemento){
    if (lista.find(elemento)){
        return elemento
    }
    return -1
}

function sumaListas(lista1,lista2){
    let listaSumada = []
    for(let i = 0; i<lista1.length;i++){
        listaSumada.push(lista1[i]+lista2[i])
    }
    return listaSumada
}

function cuadradosLista(lista1){
    let listaCuadrado = []
    for(let i = 0; i<lista1.length;i++){
        listacuadrado.push(lista1[i]*lista1[i])
    }
    return listaCuadrado
}

