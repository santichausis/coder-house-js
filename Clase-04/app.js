// Calcular precio de la compra de plantas y tierra.

let plantas = Number(prompt("¿Cuántas plantas quiere? El valor de cada una es de $135"))
let tierra = Number(prompt("¿Cuántas bolsas de tierra quiere? El valor de cada bolsa es de $150"))
let envio = prompt("¿Necesita que se lo envien a su domicilio? Si/No. El valor es $300")

// Calcular costo de las plantas
function precioPlantas(plantas) {
    totalPlantas = plantas * 135
    document.write(`🌿 En plantas usted gastó un total de $${totalPlantas}. <br>`)
}

// Calcular costo de la tierra
function precioTierra(tierra) {
    totalTierra = tierra * 150
    document.write(`🪨 En tierra usted gastó un total de $${totalTierra}. <br>`)
}

// Calcular envio
function calcularEnvio(envio) {
    if (envio == "Si") {
        totalEnvio = 300;
        document.write(`🚛 El precio del envio es de $300 <br>`)
    } else {
        totalEnvio = 0;
        document.write(`🚛 El precio del envio es de $0 <br>`)
    }
}

// Calcular gasto total
function gastoTotal(totalPlantas, totalTierra) {
    precioFinal = totalPlantas + totalTierra + totalEnvio
    document.write(`💰 En total usted gastó $${totalPlantas + totalTierra + totalEnvio}. <br>`)
}

// Calcular descuento
function descuento(precioFinal) {
    if (precioFinal > 1000) {
        precioFinal = precioFinal * 0.9
        document.write(`💸 En total con descuentos usted gastó ${precioFinal}.`)
    } else {
        document.write(`😕 No aplican descuentos en este monto.`)
    }
}

// Llamar funciones
precioPlantas(plantas)
precioTierra(tierra)
calcularEnvio(envio)
gastoTotal(totalPlantas, totalTierra)
descuento(precioFinal)

