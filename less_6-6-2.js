export function less62() {
  const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
  let newArr = [...new Set(arr)];

  alert(`Изначальный массив:\n${arr}\nУникальные значения:\n${newArr}`)

}