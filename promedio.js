// const lista1 = [
//     100,
//     200,
//     300,
//     500,

// ]

const media = lista1 => {
    let suma = 0
    lista1.map(sueldo => suma += sueldo)
    let media = suma / lista1.length
    return media
}


const mediana = lista1 => {
    lista1.sort()
    const mitadLista = lista1.length / 2
    let mediana = 0
    if( par(lista1.length) ){
        let value1 = lista1[mitadLista - 1]
        let value2 = lista1[mitadLista]
        mediana = media([value1, value2])
    }else{
        mediana = lista1[parseInt(mitadLista)]
    }
    return mediana
}

const par = number => {
    if(number % 2 === 0) return true
    return false
}


const moda = lista1 => {

    let resultModa = {}

    // preguntamos si ya existe la propiedad
    // si ya existe se le suma 1 a la propiedad
    // sino, se crea la propiedad con defecto 1 
    lista1.map(value => resultModa[value] ? resultModa[value] += 1 : resultModa[value] = 1)
    
    let moda = 0

    Object.entries(resultModa).forEach((value1) => {
        let actualValue = Number(value1[0])
        Object.entries(resultModa).forEach((value2) => {
            let actualValue2 = Number(value2[0])
            actualValue2 > actualValue && ( moda = actualValue2 )
        })
    })

    return moda

}