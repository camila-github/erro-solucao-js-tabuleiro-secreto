// SOLUCAO 1 - Usado função anonima
(function hashMagico(numEntrada) {
    while (numEntrada--) {
        entradas = [];
        resultado = 0;
        numCasos = parseInt(gets());

        while (numCasos--) entradas = [...entradas, gets()];

        for (let [index, linha] of entradas.entries()) {
            resultado += linha.match(/[A-Z]/g).reduce((valorAcc, curr, strIndex) => valorAcc + (parseInt(curr, 36) - 10) + index + strIndex, 0);
        }
        console.log(resultado);
    }
})(gets());