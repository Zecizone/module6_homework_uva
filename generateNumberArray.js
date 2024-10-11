export function generateNumberArray() {
  const num = prompt('Введите длинну массива:')
  const toNum = Number(num)
  let arr = [];

  for (let i = 0; i <= toNum; i++) {
    arr.push(i);
  }
  
  alert(`Массив ${arr}`)
}
