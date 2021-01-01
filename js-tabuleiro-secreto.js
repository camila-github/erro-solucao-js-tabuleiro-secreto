// SOLUCAO 1
let saidaDados = '';
/*ENTRADA DE DADOS*/
while ((entradaDados = gets())) {
    let [tamTabuleiro, quantOperacoes] = entradaDados.split(" ");
    let tabuleiro = Array.from(Array(parseInt(tamTabuleiro)), () => new Array(parseInt(tamTabuleiro)).fill(0));

    while (quantOperacoes--) {
        let [tipoOperacao, LinhaColuna, valorR] = gets().split(" ");
        operacoes(tipoOperacao, tabuleiro, parseInt(LinhaColuna), parseInt(valorR));
    }
    console.log(saidaDados);
}

/*VERIFICA O TIPO DE OPERAÇÃO*/
function operacoes(tipOper, tab, linCol, valorR) {
    if (tipOper == '1')
        for (let i = 0; i < tab.length; i++) tab[linCol - 1][i] = valorR;

    if (tipOper == '2')
        for (let i = 0; i < tab.length; i++) tab[i][linCol - 1] = valorR;

    if (tipOper == '3') saidaDados += lerRepeticoes(tab[linCol - 1]) + '\n';

    if (tipOper == '4') saidaDados += lerRepeticoes(tab.map(linha => linha[linCol - 1])) + '\n';
}

/*VERIFICA QUANTIDADE DE VEZES QUE UM NUMERO SE REPETE NA COLUNA OU LINHA DO TABULEIRO*/
function lerRepeticoes(tabuleiro) {
    let array = [],
        numQueRepete = tabuleiro[0],
        contarRepeticoes = 0;
    for (num of tabuleiro) {
        (array[num] == null) ? array[num] = 0: array[num]++;
        if (array[num] > contarRepeticoes) contarRepeticoes = array[numQueRepete = num];
        if (array[num] === contarRepeticoes) numQueRepete = Math.max(numQueRepete, num);
    }
    return numQueRepete;
}