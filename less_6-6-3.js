export function less63() {
  let num = prompt('Введите длинну массива:')
  let toNum = Number(num)
  let arr = [];

  for (let i = 0; i <= toNum; i++) {
    arr.push(i);
  }
  
  alert(`Массив ${arr}`)
}
