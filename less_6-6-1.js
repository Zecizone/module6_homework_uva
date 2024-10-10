export function less61() {
  let str = prompt('Введите палиндром:')
  let lowerStr = str.toLowerCase();
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