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
