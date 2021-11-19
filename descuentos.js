// const precioOriginal = 120
// const descuento = 18



function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento
    const precioConDescuento = ( precio * porcentajeConDescuento ) / 100
    return precioConDescuento
}

function calculoRapido(precio, descuento){
    let result = (precio * descuento) / 100
    let total = precio - result
    return total
}


function calculatePrice(){
    const precio = document.getElementById('precio')['value']
    const descuento = document.getElementById('descuento')['value']
    const msg = document.getElementById('finalPrice')

    const precioApagar = calcularPrecioConDescuento(precio, descuento)

    msg.innerHTML = `El precio final a pagar es: $${precioApagar}`
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento
// })