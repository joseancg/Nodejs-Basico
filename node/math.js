
function suma(x1, x2){
    return x1+ x2;
}

function resta(x1, x2){
    return x1- x2;
}

function divide(x1, x2){
    if (x2== 0){
        console.log('No se puede dividir entre Cero');
    }else{
        return x1/ x2;
    }
}

exports.divide= divide;