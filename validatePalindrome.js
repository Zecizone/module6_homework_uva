export function validatePalindrome() {
  const str = prompt('Введите палиндром:')
  const lowerStr = str.toLowerCase();
  let newStr = ''

  for (let i = lowerStr.length - 1; i >= 0; i--) {
    newStr += lowerStr[i];
  }

  if (lowerStr === newStr) {
    alert(`Слово ${str} является палиндромом`)
  } else {
    alert(`Слово ${str} не является палиндромом`)
  }
}