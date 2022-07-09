function VerificaPalindromo(string) {
  if (!string) return 'String inexistente'

  return string.split('').reverse().join('') === string
}

//console.log(VerificaPalindromo(''))

function verificaPalindromo2(string) {
  if (!string) return 'Não é uma string Válida'

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false //vai parar a funçao, se for diferente
    }
  }
  return true
}

console.log(verificaPalindromo2('ovo'))
