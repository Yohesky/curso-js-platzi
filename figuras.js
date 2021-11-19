// cuadrado
console.group('Cuadrados')
// const ladoCuadrado = 5
// console.log('Los lados del cuadrado miden:' + ladoCuadrado + 'cm')

function perimetroCuadrado(lado){
    return lado * 4
}
// const perimetroCuadrado = ladoCuadrado * 4
// console.log('El periemtro del cuadrado es:' + perimetroCuadrado + 'cm')

// const areaCuadrado = ladoCuadrado * ladoCuadrado
function areaCuadrado(lado){
    return lado * lado
}
// console.log('El area cuadrada es:' + areaCuadrado + 'cm´2')
console.groupEnd()

// triangulo
console.group('Triangulos')
// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4

// console.log('Los lados del triangulo miden:' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriangulo + 'cm')

// const alturaTriangulo = 5.5
// console.log('La altura del triangulo es:' + alturaTriangulo)

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

// const perimetroTriangulo = 
// console.log('El perimetro es ' + perimetroTriangulo)
function areaTriangulo(base, altura){
    return (base * altura) / 2
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log('El area es: ' + areaTriangulo + 'cm´2')

console.groupEnd()


// circulos
console.group('Circulos')

// radio

// diametro
function diametroCirculo(radio){
    return radio * 2
}

// pi
const PI = Math.PI
console.log('PI: ', PI)

// crcunferencia ?
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

// area ? 

function areaCirculo(radio){
    return (radio * radio) * PI
}


console.groupEnd()


function alturaIsoceles(long1, long2, base){
    if(long1 !== long2){
        alert('No es triangulo isosceles')
    }

    const h = (long1*long1) - ((long2 / 2) * (long2 / 2))
    const altura = Math.sqrt(h)
    return altura
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}


// funcion para el evento

function calcularPerimetro(){
    const input = document.getElementById('inputCuadrado')
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularArea(){

}