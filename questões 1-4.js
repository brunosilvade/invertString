/* 1 -------
O valor final é 91 */

2 -------

function verificaFibonacci(num) {
  let a = 0, b = 1;
  while (b < num) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  if (b === num) {
    return num + " pertence à sequência de Fibonacci.";
  } else {
    return num + " não pertence à sequência de Fibonacci.";
  }
}

let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
let resultado = verificaFibonacci(numero);
console.log(resultado);

/* 3 -------

a) 1, 3, 5, 7, ___
Resposta: 9

b) 2, 4, 8, 16, 32, 64, ___
Resposta: 128

c) 0, 1, 4, 9, 16, 25, 36, ___
Resposta: 49

d) 4, 16, 36, 64, ___
Resposta: 100

e) 1, 1, 2, 3, 5, 8, ___
Resposta: 13

f) 2, 10, 12, 16, 17, 18, 19, ___ */

/* 4 --------------
Primeira ida:
Ligo um dos interruptores e aguardo alguns minutos para que uma das lâmpadas esquente.
Segunda ida:
Desligo o interruptor que liguei na primeira ida.
Ligo outro interruptor que estava desligado na primeira ida.
Identificação dos interruptores:
A lâmpada que está acesa corresponde ao interruptor que liguei na primeira ida.
A lâmpada que está apagada e fria corresponde ao interruptor que liguei na segunda ida.
A lâmpada que está apagada e não esquentou corresponde ao terceiro interruptor. */

5 ------------------------

function inverteString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

let palavraTeste = "hello";
let palavraInvertida = inverteString(palavraTeste);
console.log("Palavra invertida:", palavraInvertida);
