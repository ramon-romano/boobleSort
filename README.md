# Algoritmo de Ordenação Bubble Sort em JavaScript

Este projeto implementa o algoritmo **Bubble Sort** em JavaScript. O Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente a lista, comparando elementos adjacentes e trocando-os se estiverem na ordem errada. Neste caso, o algoritmo ordena os elementos do maior para o menor (ordem decrescente).

## Como funciona

A função `boobleSort(array)` recebe um array como argumento e o ordena em ordem decrescente usando o Bubble Sort. O algoritmo compara pares de elementos e troca suas posições se o primeiro for menor que o segundo, repetindo o processo até que o array esteja completamente ordenado.

### Exemplo

```javascript
function boobleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(boobleSort([4, 2, 6, 8, 3, 7])); // [8, 7, 6, 4, 3, 2]
