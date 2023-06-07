function ValidarNro(numero){
    var retorno;
    let numeroValido = parseInt(numero);
    if (typeof numeroValido === 'number' && !isNaN(numeroValido)) {
        retorno = true;
    }
    else{
        retorno = false;
    }
    return retorno;
}

function ValidarString(parametro, minimaLongitud, maximaLongitud) {
    var retorno = false;
    if (typeof parametro === 'string') {
        if (parametro.length >= minimaLongitud && parametro.length <= maximaLongitud && /^[A-Za-z ]+$/.test(parametro)
        ) {
            retorno = true;
        }
    }
    return retorno;
}
export {ValidarNro, ValidarString};