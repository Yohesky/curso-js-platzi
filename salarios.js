const salariosCol = colombia.map(person => person.salary)
salariosCol.sort((a,b) => a-b)

const esPar = number => number % 2 === 0

const media = lista1 => {
    let suma = 0
    lista1.map(sueldo => suma += sueldo)
    let media = suma / lista1.length
    return media
}

const medianaSalarios = lista => {
    const mitad = parseInt(lista.length / 2)
    if( esPar(lista.length) ){
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = media([personaMitad1, personaMitad2])
        return mediana
    }else{
        const personaMitad = lista[mitad]
        return personaMitad
    }
}


function calculoRapido(precio, descuento){
    let result = (precio * descuento) / 100
    let total = precio - result
    return total
}

const medianaGeneral = medianaSalarios(salariosCol)

const start = calculoRapido(salariosCol.length, 10)
const end = salariosCol.length - start
const top10salarys = salariosCol.splice(start,end)
const top10 = medianaSalarios(top10salarys)
console.log(top10salarys)


console.log({
    medianaGeneral,
    top10
})