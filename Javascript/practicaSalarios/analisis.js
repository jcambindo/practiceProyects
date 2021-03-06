// Utils
function esPar(numeroaVerificar){
    return (numeroaVerificar%2===0);
}

function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista
}

//Mediana General

const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB
    }
);
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const pesonaMitad1 = lista[mitad-1];
        const pesonaMitad2 = lista[mitad];
        const mediana=calcularMediaAritmetica([pesonaMitad1, pesonaMitad2]);
        return mediana 
    }else{
        const pesonaMitad = lista [mitad];
        return pesonaMitad;
    }
}

// Mediana del top 10%

const spliceStart = (salariosColSorted.length*(100-10))/100; 
const spliceCount = salariosColSorted.length-spliceStart; 

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount)

const medianaGeneralCol = medianaSalarios(salariosColSorted)
const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

