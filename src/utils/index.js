function calcularTotal(monto, plazo) {
    let total = 0
    if (monto < 5000) {
        total = monto * 1.5
    } else if (monto >= 5000 && monto < 10000) {
        total = monto * 1.4
    } else if (monto >= 10000 && monto < 15000) {
        total = monto * 1.3
    } else {
        total = monto * 1.2
    }
    if (plazo === 6) {
        total *= 1.1
    } else if (plazo === 12) {
        total *= 1.2
    } else {
        total *= 1.3
    }

    return total
}

export { calcularTotal }