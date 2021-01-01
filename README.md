## Treinamento Digital Innovation One - Exercicio - O Tabuleiro Secreto

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Resolvendo Algoritmos Com JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

O senhor Milli, morador da cidade Petland, é o famoso proprietário da maior fábrica de jogos de tabuleiros do mundo. 

Recentemente, ele teve a ideia de lançar um novo jogo exclusivo de tabuleiro, que ele apelidou de Tabuleiro da Frequência.

O jogo ocorre da seguinte forma. Inicialmente, um tabuleiro com dimensões N × N é dado contendo apenas 0’s. Depois disso, Q operações são propostas, podendo ser de 4 tipos:

1 X R: Atribuir o valor R a todos os números da linha X;
2 X R: Atribuir o valor R a todos os números da coluna X;
3 X: Imprimir o valor mais frequente na linha X;
4 X: Imprimir o valor mais frequente da coluna X.

Milli não é muito bom com computadores, mas é bastante preguiçoso. Sabendo que você é um dos melhores programadores do mundo, ele precisa sua ajuda para resolver este problema.


#### Entrada:

A primeira linha da entrada é composta por dois inteiros N e Q (1 ≤ N, Q ≤ 105), representando, respectivamente, o tamanho do tabuleiro e a quantidade de operações. As próximas Q linhas da entrada vão conter as Q operações. O primeiro inteiro de cada linha vai indicar o tipo da operação. Caso seja 1 ou 2, será seguido por mais dois inteiros X (1 ≤ X ≤ N) e R (0 ≤ R ≤ 50). Caso seja 3 ou 4, será seguido por apenas mais um inteiro X.

#### Saída:

Para cada operação do tipo 3 ou 4, seu programa deve produzir uma linha, contendo o valor da resposta correspondente. Se uma linha ou coluna tiver dois ou mais valores que se repetem o mesmo número de vezes, você deve imprimir o maior deles. Por exemplo, se uma linha tem os valores [5,7,7,2,5,2,1,3], tanto o 2, 5 e 7 se repetem duas vezes, então a resposta será 7, pois é o maior deles.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
2 4 | 2
1 1 1 | 2
2 2 2 |
3 1 |
3 2	|

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 6 | 4
1 1 2 | 3
1 2 3 |
1 3 4 |
4 3 |
1 3 0 |
4 3 |



#### Link Referência:
https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-05.js

https://github.com/lucasrmagalhaes/desafios-DIO/blob/master/Desafios/Java/2.%20Resolvendo%20Algoritmos%20com%20Java/5.%20O%20Tabuleiro%20Secreto/Main.java

Math.max() ( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max ).

Destructuring Assignment( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao ).

Matriz Array.from() 1.( https://www.devmedia.com.br/javascript-arrays/4079 ) 2.( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from ).


```javascript
// SOLUCAO 1
let saidaDados = '';
/*ENTRADA DE DADOS*/
while ((entradaDados = gets())) {
    /*.split(" ") -  separa cada string para armazenar em um array de atribuição via 
    desestruturação (destructuring assignment). 'Tamanho do Tabuleiro' e 'Quantidade de Operações'*/
    let [tamTabuleiro, quantOperacoes] = entradaDados.split(" ");

    /*Criado uma matriz com o tamanho de acordo com a entrada referente o tamanho do 
    tabuleiro. A matriz terá o valor inicial de 0 (.fill(0))*/
    let tabuleiro = Array.from(Array(parseInt(tamTabuleiro)), () => new Array(parseInt(tamTabuleiro)).fill(0));

    while (quantOperacoes--) {
        /*.split(" ") -  separa cada string para armazenar em um array de atribuição via 
        desestruturação (destructuring assignment). 'Tipo da Operação', 
        'Tipo da Operação com dois inteiros' e 'Tipo da Operação com um inteiro'*/
        let [tipoOperacao, LinhaColuna, valorR] = gets().split(" ");

        /*Será chamado a função (operacoes)*/
        operacoes(tipoOperacao, tabuleiro, parseInt(LinhaColuna), parseInt(valorR));
    }
    /*Imprime o resultado*/
    console.log(saidaDados);
}

/*VERIFICA O TIPO DE OPERAÇÃO*/
function operacoes(tipOper, tab, linCol, valorR) {
    /*Operador 1, os valores de 'valorR' serão atribuidos no tabuleiro em linhas */
    if (tipOper == '1')
        for (let i = 0; i < tab.length; i++) tab[linCol - 1][i] = valorR;

    /*Operador 2, os valores de 'valorR' serão atribuidos no tabuleiro em colunas */
    if (tipOper == '2')
        for (let i = 0; i < tab.length; i++) tab[i][linCol - 1] = valorR;

    /*Operador 3, soma na variavel 'saidaDados', a quantidade de vezes que um numero
    se repete na linha do tabuleiro.Nesse trecho é chamado a função lerRepeticoes*/
    if (tipOper == '3') saidaDados += lerRepeticoes(tab[linCol - 1]) + '\n';

    /*Operador 4, soma na variavel 'saidaDados', a quantidade de vezes que um numero
    se repete na coluna do tabuleiro. Nesse trecho é chamado a função lerRepeticoes*/
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
```
